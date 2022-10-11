import { c as create_ssr_component, b as subscribe, d as add_attribute, o as onDestroy, e as escape, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import "../../chunks/index3.js";
import { w as writable } from "../../chunks/index2.js";
const style = "";
const prism = "";
const gradio_logo = "/_app/immutable/assets/gradio-26ec459c.svg";
const twitter = "/_app/immutable/assets/twitter-aa67e360.svg";
const github = "/_app/immutable/assets/github-b4948cbf.svg";
const github_black = "/_app/immutable/assets/github-black-ca3d1309.svg";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  {
    console.log($store == null ? void 0 : $store.lg);
  }
  $$unsubscribe_store();
  return `<div class="${"container mx-auto flex flex-wrap justify-between flex-row relative items-center px-4 py-5 gap-6 text-lg z-50"}"><a href="${"/"}"><img${add_attribute("src", gradio_logo, 0)} alt="${"Gradio logo"}"></a>
	<svg class="${"h-8 w-8 lg:hidden"}" viewBox="${"-10 -10 20 20"}"><rect x="${"-7"}" y="${"-6"}" width="${"14"}" height="${"2"}"></rect><rect x="${"-7"}" y="${"-1"}" width="${"14"}" height="${"2"}"></rect><rect x="${"-7"}" y="${"4"}" width="${"14"}" height="${"2"}"></rect></svg>
	<nav class="${[
    "w-full flex-col gap-3 lg:flex lg:w-auto lg:flex-row lg:gap-8",
    "hidden"
  ].join(" ").trim()}"><a class="${"thin-link flex items-center gap-3"}" href="${"/getting_started"}"><span>\u26A1</span> <span>Quickstart</span></a>
		<a class="${"thin-link flex items-center gap-3"}" href="${"/docs"}"><span>\u270D\uFE0F</span> <span>Docs</span></a>
		<a class="${"thin-link flex items-center gap-3"}" href="${"/guides"}"><span>\u{1F4A1}</span> <span>Guides</span></a>
		<a class="${"thin-link flex items-center gap-3"}" href="${"/demos"}"><span>\u{1F3A2}</span> <span>Demos</span></a>
		<div class="${"group relative flex cursor-pointer items-center gap-3"}"><span>\u{1F590}</span> <span>Community</span>
			<svg class="${"h-4 w-4"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}"><path d="${"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}"></path></svg>
			${``}</div>

		<a class="${"thin-link flex items-center gap-3"}" href="${"https://github.com/gradio-app/gradio"}"><img${add_attribute("src", github_black, 0)} class="${"w-6"}" alt="${"Github logo"}"></a></nav></div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"container mx-auto flex-row flex items-center px-4 py-6 justify-between"}"><a href="${"/"}"><svg width="${"90"}" viewBox="${"0 0 451 105"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M45.7779 9.7789L91.2031 34.6919V49.2071L45.7779 24.2941V9.7789Z"}" fill="${"#FF7C00"}" fill-opacity="${"0.75"}"></path><path d="${"M91.1878 34.6924L45.5957 59.6992V74.3078L91.1878 49.301V34.6924Z"}" fill="${"#FF7C00"}"></path><path d="${"M-0.000525172 34.6924L45.5957 59.6992V74.3079L-0.000525172 49.3011V34.6924Z"}" fill="${"#FF7C00"}" fill-opacity="${"0.75"}"></path><path d="${"M45.7731 9.68544L0.00585938 34.6919V49.3006L45.7731 24.2942V9.68544Z"}" fill="${"#FF7C00"}"></path><path d="${"M45.7779 34.9728L91.2031 59.8857V74.4009L45.7779 49.488V34.9728Z"}" fill="${"#FF7C00"}" fill-opacity="${"0.75"}"></path><path d="${"M91.1878 59.8853L45.5957 84.8921V99.5007L91.1878 74.4939V59.8853Z"}" fill="${"#FF7C00"}"></path><path d="${"M-0.000525172 59.8853L45.5957 84.8921V99.5008L-0.000525172 74.494V59.8853Z"}" fill="${"#FF7C00"}" fill-opacity="${"0.75"}"></path><path d="${"M45.7731 34.8783L0.00585938 59.8848V74.4935L45.7731 49.4871V34.8783Z"}" fill="${"#FF7C00"}"></path><path d="${"M139.727 96.9891L148.148 86.596C152.803 90.8598 157.991 92.9917 163.711 92.9917C167.549 92.9917 170.711 92.4232 173.198 91.2862C175.686 90.1492 176.929 88.5858 176.929 86.596C176.929 83.2205 174.176 81.5327 168.668 81.5327C167.176 81.5327 164.955 81.7104 162.006 82.0657C159.057 82.421 156.836 82.5987 155.344 82.5987C146.176 82.5987 141.593 79.312 141.593 72.7386C141.593 70.8554 142.357 69.0077 143.885 67.1956C145.413 65.3835 147.189 64.0511 149.214 63.1983C142.712 58.97 139.461 52.9829 139.461 45.237C139.461 39.1255 141.699 34.08 146.176 30.1004C150.653 26.0853 156.161 24.0777 162.699 24.0777C167.815 24.0777 172.097 25.0371 175.544 26.9558L180.767 20.8799L189.987 29.2476L183.645 33.8845C185.848 37.2245 186.949 41.1686 186.949 45.7166C186.949 52.219 184.959 57.4244 180.98 61.3329C177.036 65.2058 172.044 67.1423 166.003 67.1423C165.044 67.1423 163.765 67.0535 162.166 66.8758L159.981 66.5561C159.732 66.5561 158.772 66.9469 157.102 67.7286C155.468 68.4748 154.651 69.2565 154.651 70.0737C154.651 71.495 155.877 72.2056 158.328 72.2056C159.43 72.2056 161.277 71.9391 163.871 71.4062C166.465 70.8732 168.686 70.6067 170.534 70.6067C183.503 70.6067 189.987 75.8121 189.987 86.2229C189.987 91.9791 187.393 96.4916 182.206 99.7606C177.018 103.065 170.764 104.717 163.445 104.717C154.704 104.717 146.798 102.141 139.727 96.9891ZM153.052 45.2903C153.052 48.6658 153.976 51.384 155.823 53.4448C157.707 55.4701 160.229 56.4828 163.392 56.4828C166.554 56.4828 168.988 55.4879 170.693 53.4981C172.399 51.5083 173.252 48.7724 173.252 45.2903C173.252 42.4122 172.328 39.9782 170.48 37.9885C168.668 35.9987 166.305 35.0038 163.392 35.0038C160.336 35.0038 157.849 35.9631 155.93 37.8819C154.011 39.8006 153.052 42.27 153.052 45.2903Z"}" fill="${"#FF7C00"}"></path><path d="${"M231.773 37.6687C229.392 36.1053 226.78 35.3236 223.938 35.3236C220.847 35.3236 218.093 36.7271 215.677 39.5341C213.296 42.3411 212.106 45.7699 212.106 49.8206V82.3322H198.781V25.2503H212.106V30.4735C215.837 26.2807 220.793 24.1843 226.976 24.1843C231.524 24.1843 235.006 24.8772 237.422 26.263L231.773 37.6687Z"}" fill="${"#FF7C00"}"></path><path d="${"M277.236 76.6293C276.028 78.6191 273.913 80.2536 270.893 81.5327C267.909 82.7763 264.782 83.3981 261.513 83.3981C255.366 83.3981 250.533 81.8703 247.016 78.8145C243.498 75.7233 241.739 71.3529 241.739 65.7033C241.739 59.0944 244.209 53.9245 249.148 50.1936C254.122 46.4628 261.175 44.5974 270.307 44.5974C271.87 44.5974 273.718 44.8639 275.85 45.3968C275.85 38.6813 271.604 35.3236 263.112 35.3236C258.102 35.3236 253.909 36.1586 250.533 37.8286L247.655 27.4888C252.239 25.2858 257.693 24.1843 264.018 24.1843C272.723 24.1843 279.101 26.1741 283.152 30.1537C287.202 34.0977 289.228 41.5949 289.228 52.6453V64.8505C289.228 72.4543 290.756 77.2334 293.811 79.1876C292.71 81.1063 291.484 82.2789 290.134 82.7053C288.783 83.1672 287.238 83.3981 285.497 83.3981C283.578 83.3981 281.855 82.6875 280.327 81.2662C278.799 79.845 277.769 78.2993 277.236 76.6293ZM275.956 55.4701C273.682 55.0082 271.977 54.7773 270.84 54.7773C260.322 54.7773 255.064 58.2238 255.064 65.117C255.064 70.2336 258.031 72.7919 263.965 72.7919C271.959 72.7919 275.956 68.7946 275.956 60.7999V55.4701Z"}" fill="${"#FF7C00"}"></path><path d="${"M340.393 82.3322V78.8678C339.292 80.0759 337.427 81.1419 334.797 82.0657C332.168 82.954 329.45 83.3981 326.643 83.3981C318.684 83.3981 312.412 80.8754 307.829 75.8299C303.28 70.7843 301.006 63.749 301.006 54.724C301.006 45.6989 303.618 38.3615 308.841 32.712C314.1 27.0269 320.673 24.1843 328.561 24.1843C332.896 24.1843 336.84 25.0726 340.393 26.8492V3.98449L353.718 0.786621V82.3322H340.393ZM340.393 38.8945C337.551 36.6205 334.584 35.4835 331.493 35.4835C326.163 35.4835 322.059 37.1179 319.181 40.3869C316.303 43.6203 314.864 48.2749 314.864 54.3509C314.864 66.2185 320.584 72.1523 332.026 72.1523C333.305 72.1523 334.868 71.7792 336.716 71.0331C338.599 70.2514 339.825 69.4697 340.393 68.688V38.8945Z"}" fill="${"#FF7C00"}"></path><path d="${"M377.542 3.13172C379.674 3.13172 381.486 3.89566 382.978 5.42353C384.506 6.91586 385.27 8.72799 385.27 10.8599C385.27 12.9918 384.506 14.8217 382.978 16.3496C381.486 17.8419 379.674 18.5881 377.542 18.5881C375.41 18.5881 373.58 17.8419 372.052 16.3496C370.56 14.8217 369.814 12.9918 369.814 10.8599C369.814 8.72799 370.56 6.91586 372.052 5.42353C373.58 3.89566 375.41 3.13172 377.542 3.13172ZM370.667 82.3322V36.1763H363.365V25.2503H384.151V82.3322H370.667Z"}" fill="${"#FF7C00"}"></path><path d="${"M395.983 53.658C395.983 44.9527 398.488 37.8641 403.498 32.3922C408.544 26.9203 415.188 24.1843 423.431 24.1843C432.101 24.1843 438.834 26.8137 443.631 32.0724C448.428 37.3311 450.826 44.5263 450.826 53.658C450.826 62.7541 448.375 69.9849 443.471 75.3502C438.603 80.7155 431.924 83.3981 423.431 83.3981C414.762 83.3981 408.011 80.6977 403.178 75.2969C398.381 69.8605 395.983 62.6476 395.983 53.658ZM409.84 53.658C409.84 66.2363 414.371 72.5254 423.431 72.5254C427.589 72.5254 430.875 70.8909 433.291 67.622C435.743 64.3531 436.969 59.6984 436.969 53.658C436.969 41.2574 432.456 35.0571 423.431 35.0571C419.274 35.0571 415.97 36.6915 413.518 39.9605C411.066 43.2294 409.84 47.7952 409.84 53.658Z"}" fill="${"#FF7C00"}"></path></svg></a>
	<div class="${"flex gap-3"}"><a class="${"hover:opacity-75 transition"}" href="${"https://twitter.com/Gradio"}"><img${add_attribute("src", twitter, 0)} class="${"w-6"}" alt="${"Twitter logo"}"></a>
		<a class="${"hover:opacity-75 transition"}" href="${"https://github.com/gradio-app/gradio"}"><img${add_attribute("src", github, 0)} class="${"w-6"}" alt="${"Github logo"}"></a></div></footer>`;
});
const sizes = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)"
};
const _default = {
  sm: false,
  md: false,
  lg: false,
  xl: false,
  "2xl": false
};
const media_query = () => {
  const { subscribe: subscribe2, update } = writable(_default);
  const listeners = {};
  const onChange = (key) => () => update((s) => ({ ...s, [key]: !!listeners[key][0].matches }));
  if (typeof window !== "undefined") {
    for (const key in sizes) {
      const mql = window.matchMedia(sizes[key]);
      const listener = onChange(key);
      mql.addEventListener("change", listener);
      listeners[key] = [mql, listener];
    }
    onDestroy(() => {
      for (const key in listeners) {
        const [_mql, _listener] = listeners[key];
        _mql.removeEventListener("change", _listener);
      }
    });
  }
  return { subscribe: subscribe2 };
};
let store;
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const meta = {
    "": {
      title: "",
      description: "",
      url: "",
      image: ""
    }
  };
  console.log($page);
  store = media_query();
  let current_route;
  current_route = current_route || "";
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>${escape(meta[current_route].title)}</title>`, ""}<meta charset="${"utf-8"}" data-svelte="svelte-sr054g"><meta name="${"viewport"}" content="${"width=device-width, initial-scale=1"}" data-svelte="svelte-sr054g"><meta name="${"description"}"${add_attribute("content", meta[current_route].description, 0)} data-svelte="svelte-sr054g"><meta name="${"author"}" content="${"Gradio Team"}" data-svelte="svelte-sr054g"><meta property="${"og:title"}"${add_attribute("content", meta[current_route].title, 0)} data-svelte="svelte-sr054g"><meta property="${"og:type"}" content="${"website"}" data-svelte="svelte-sr054g"><meta property="${"og:url"}"${add_attribute("content", $page.url.origin, 0)} data-svelte="svelte-sr054g"><meta property="${"og:description"}"${add_attribute("content", meta[current_route].description, 0)} data-svelte="svelte-sr054g"><meta property="${"og:image"}"${add_attribute("content", meta[current_route].image, 0)} data-svelte="svelte-sr054g"><meta name="${"twitter:card"}" content="${"summary_large_image"}" data-svelte="svelte-sr054g"><meta name="${"twitter:creator"}" content="${"@Gradio"}" data-svelte="svelte-sr054g"><meta name="${"twitter:title"}"${add_attribute("content", meta[current_route].title, 0)} data-svelte="svelte-sr054g"><meta name="${"twitter:description"}"${add_attribute("content", meta[current_route].description, 0)} data-svelte="svelte-sr054g"><meta name="${"twitter:image"}"${add_attribute("content", meta[current_route].image, 0)} data-svelte="svelte-sr054g"><link rel="${"icon"}" type="${"image/png"}" href="${"/assets/img/logo.png"}" data-svelte="svelte-sr054g"><link href="${"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"}" rel="${"stylesheet"}" data-svelte="svelte-sr054g"><script async src="${"https://www.googletagmanager.com/gtag/js?id=UA-156449732-1"}" data-svelte="svelte-sr054g"><\/script><script data-svelte="svelte-sr054g">window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag("js", new Date());
		gtag("config", "UA-156449732-1");
	<\/script><script type="${"module"}" src="${"https://gradio.s3-us-west-2.amazonaws.com/3.4.1/gradio.js"}" data-svelte="svelte-sr054g"><\/script>`, ""}

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default,
  store
};
