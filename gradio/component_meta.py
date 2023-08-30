from __future__ import annotations

import ast
import inspect
from abc import ABCMeta
from functools import wraps
from pathlib import Path

from jinja2 import Template

from gradio.data_classes import GradioModel, GradioRootModel
from gradio.events import EventListener
from gradio.exceptions import ComponentDefinitionError

INTERFACE_TEMPLATE = '''
{{ contents }}

    {% for event in events %}
    def {{ event }}(self,
        fn: Callable | None,
        inputs: Component | Sequence[Component] | set[Component] | None = None,
        outputs: Component | Sequence[Component] | None = None,
        api_name: str | None | Literal[False] = None,
        status_tracker: None = None,
        scroll_to_output: bool = False,
        show_progress: Literal["full", "minimal", "hidden"] = "full",
        queue: bool | None = None,
        batch: bool = False,
        max_batch_size: int = 4,
        preprocess: bool = True,
        postprocess: bool = True,
        cancels: dict[str, Any] | list[dict[str, Any]] | None = None,
        every: float | None = None,
        _js: str | None = None,) -> Dependency:
        """
        Parameters:
            fn: the function to call when this event is triggered. Often a machine learning model's prediction function. Each parameter of the function corresponds to one input component, and the function should return a single value or a tuple of values, with each element in the tuple corresponding to one output component.
            inputs: List of gradio.components to use as inputs. If the function takes no inputs, this should be an empty list.
            outputs: List of gradio.components to use as outputs. If the function returns no outputs, this should be an empty list.
            api_name: Defines how the endpoint appears in the API docs. Can be a string, None, or False. If False, the endpoint will not be exposed in the api docs. If set to None, the endpoint will be exposed in the api docs as an unnamed endpoint, although this behavior will be changed in Gradio 4.0. If set to a string, the endpoint will be exposed in the api docs with the given name.
            status_tracker: Deprecated and has no effect.
            scroll_to_output: If True, will scroll to output component on completion
            show_progress: If True, will show progress animation while pending
            queue: If True, will place the request on the queue, if the queue has been enabled. If False, will not put this event on the queue, even if the queue has been enabled. If None, will use the queue setting of the gradio app.
            batch: If True, then the function should process a batch of inputs, meaning that it should accept a list of input values for each parameter. The lists should be of equal length (and be up to length `max_batch_size`). The function is then *required* to return a tuple of lists (even if there is only 1 output component), with each list in the tuple corresponding to one output component.
            max_batch_size: Maximum number of inputs to batch together if this is called from the queue (only relevant if batch=True)
            preprocess: If False, will not run preprocessing of component data before running 'fn' (e.g. leaving it as a base64 string if this method is called with the `Image` component).
            postprocess: If False, will not run postprocessing of component data before returning 'fn' output to the browser.
            cancels: A list of other events to cancel when this listener is triggered. For example, setting cancels=[click_event] will cancel the click_event, where click_event is the return value of another components .click method. Functions that have not yet run (or generators that are iterating) will be cancelled, but functions that are currently running will be allowed to finish.
            every: Run this event 'every' number of seconds while the client connection is open. Interpreted in seconds. Queue must be enabled.
        """
        ...
    {% endfor %}
'''


def serializes(f):
    @wraps(f)
    def serialize(*args, **kwds):
        output = f(*args, **kwds)
        if isinstance(output, (GradioRootModel, GradioModel)):
            output = output.model_dump()
        return output

    return serialize


def create_pyi(class_code: str, events: list[EventListener | str]):
    template = Template(INTERFACE_TEMPLATE)
    events = [e if isinstance(e, str) else e.event_name for e in events]
    return template.render(events=events, contents=class_code)


def extract_class_source_code(code: str, class_name: str) -> str | None:
    class_start_line = code.find(f"class {class_name}")
    if class_start_line == -1:
        return None

    class_ast = ast.parse(code)
    for node in ast.walk(class_ast):
        if isinstance(node, ast.ClassDef) and node.name == class_name:
            return ast.get_source_segment(code, node)


def create_or_modify_pyi(
    component_class: type, class_name: str, events: list[str | EventListener]
):
    source_file = Path(inspect.getfile(component_class))

    source_code = source_file.read_text()

    current_impl = extract_class_source_code(source_code, class_name)

    assert current_impl
    new_interface = create_pyi(current_impl, events)

    pyi_file = source_file.with_suffix(".pyi")
    if not pyi_file.exists():
        pyi_file.write_text(source_code)
    current_interface = extract_class_source_code(pyi_file.read_text(), class_name)
    if not current_interface:
        with open(str(pyi_file), mode="a") as f:
            f.write(new_interface)
    else:
        contents = pyi_file.read_text()
        contents = contents.replace(current_interface, new_interface.strip())
        pyi_file.write_text(contents)


class ComponentMeta(ABCMeta):
    def __new__(cls, name, bases, attrs):
        if "EVENTS" not in attrs:
            found = False
            for base in bases:
                if hasattr(base, "EVENTS"):
                    found = True
                    break
            if not found:
                raise ComponentDefinitionError(
                    f"{name} or its base classes must define an EVENTS list. "
                    "If no events are supported, set it to an empty list."
                )
        events = attrs.get("EVENTS", [])
        if not all(isinstance(e, (str, EventListener)) for e in events):
            raise ComponentDefinitionError(
                f"All events for {name} must either be an string or an instance "
                "of EventListener."
            )
        for event in events:
            trigger = (
                EventListener(event_name=event) if isinstance(event, str) else event
            )
            attrs[event] = trigger.listener
        if "postprocess" in attrs:
            attrs["postprocess"] = serializes(attrs["postprocess"])

        component_class = super().__new__(cls, name, bases, attrs)
        create_or_modify_pyi(component_class, name, events)
        return component_class
