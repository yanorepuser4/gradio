import { c as create_ssr_component, f as each, e as escape, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { l as logos, t as tweets } from "../../chunks/index3.js";
const sketch = `<pre class="language-python"><code class="language-python"><span class="token keyword">import</span> gradio <span class="token keyword">as</span> gr
<span class="token keyword">def</span> <span class="token function">sketch_recognition</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span><span class="token comment"># Implement your sketch recognition model here...</span>

gr<span class="token punctuation">.</span>Interface<span class="token punctuation">(</span>fn<span class="token operator">=</span>sketch_recognition<span class="token punctuation">,</span> inputs<span class="token operator">=</span><span class="token string">"sketchpad"</span><span class="token punctuation">,</span> outputs<span class="token operator">=</span><span class="token string">"label"</span><span class="token punctuation">).</span>launch<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>`;
const q_a = `<pre class="language-python"><code class="language-python"><span class="token keyword">import</span> gradio <span class="token keyword">as</span> gr
<span class="token keyword">def</span> <span class="token function">question_answer</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> question<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token keyword">pass </span><span class="token comment"> # Implement your question-answering model here...</span>

gr<span class="token punctuation">.</span>Interface<span class="token punctuation">(</span>fn<span class="token operator">=</span>question_answer<span class="token punctuation">,</span> inputs<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">"text"</span><span class="token punctuation">,</span> <span class="token string">"text"</span><span class="token punctuation">],</span> outputs<span class="token operator">=</span>[</span><span class="token string">"textbox"</span><span class="token punctuation">,</span> <span class="token string">"text"</span><span class="token punctuation">]).</span>launch<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>`;
const img = `<pre class="language-python"><code class="language-python"><span class="token keyword">import</span> gradio <span class="token keyword">as</span> gr
<span class="token keyword">def</span> <span class="token function">segment</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token keyword">pass </span><span class="token comment"> # Implement your image segmentation model here...</span>

gr<span class="token punctuation">.</span>Interface<span class="token punctuation">(</span>fn<span class="token operator">=</span>segment<span class="token punctuation">,</span> inputs<span class="token operator">=</span><span class="token string">"image"</span><span class="token punctuation">,</span> outputs<span class="token operator">=</span><span class="token string">"image"</span><span class="token punctuation">).</span>launch<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>`;
const Demos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tabs = [
    {
      title: "Sketch Recognition",
      code: sketch,
      demo: "gradio/pictionary"
    },
    {
      title: "Question Answering",
      code: q_a,
      demo: "gradio/question-answering"
    },
    {
      title: "Image Segmentation",
      code: img,
      demo: "gradio/Echocardiogram-Segmentation"
    },
    {
      title: "Time Series Forecasting",
      code: false,
      demo: "gradio/timeseries-forecasting-with-prophet"
    },
    {
      title: "XGBoost with Explainability",
      code: false,
      demo: "gradio/xgboost-income-prediction-with-explainability"
    }
  ];
  let current_selection = 0;
  return `<div class="${"container mx-auto mb-6 px-4 overflow-hidden"}"><nav class="${"flex lg:flex-wrap gap-3 overflow-x-auto py-1 lg:gap-6 whitespace-nowrap text-gray-600 md:text-lg mb-4 md:mb-0 lg:justify-center"}">${each(tabs, ({ title }, i) => {
    return `<div class="${"demo-tab hover:text-gray-800 cursor-pointer px-3 py-1 active-example-tab"}">${escape(title)}
			</div>`;
  })}</nav></div>
<div class="${"container mx-auto mb-6 px-4 grid grid-cols-1"}">${each(tabs, ({ demo, code }, i) => {
    return `<div class="${["demo space-y-2 md:col-span-3", i !== current_selection ? "hidden" : ""].join(" ").trim()}"><div class="${"codeblock rounded-lg bg-gray-50 shadow-inner text-sm md:text-base mx-auto max-w-5xl"}"><!-- HTML_TAG_START -->${code}<!-- HTML_TAG_END --></div>
			<div class="${"mx-auto max-w-5xl"}"><gradio-app${add_attribute("space", demo, 0)}></gradio-app></div>
		</div>`;
  })}</div>`;
});
const gradio_banner = "/_app/immutable/assets/header-image-6f7fe773.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#gradio-banner.svelte-gciof1{width:550px}@media(min-width: 1280px){#gradio-banner.svelte-gciof1{width:850px}}@media(min-width: 1536px){#gradio-banner.svelte-gciof1{width:1050px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  fetch("https://api.github.com/repos/gradio-app/gradio").then((r) => {
    return r.json();
  }).then((data) => {
    star_count = data.stargazers_count;
  });
  let star_count = 0;
  $$result.css.add(css);
  return `${$$result.head += ``, ""}

<div class="${"container relative mx-auto px-4 pt-8 pb-12"}"><div class="${"flex flex-col items-center lg:flex-row"}"><img id="${"gradio-banner"}" class="${"mb-12 lg:flex-1 svelte-gciof1"}"${add_attribute("src", gradio_banner, 0)} alt="${"Gradio Banner"}">
		<div class="${"text-left"}"><div class="${"mb-10 text-4xl font-bold capitalize text-gray-900 xl:-ml-52 xl:text-5xl 2xl:text-6xl"}">Build &amp; share delightful machine learning apps
			</div>
			<div class="${"lg:pl-12"}"><p class="${"mx-auto mb-12 text-xl text-gray-600"}">Gradio is the fastest way to demo your machine learning model with a
					friendly web interface so that anyone can use it, anywhere!
				</p>
				<div class="${"flex space-x-4 justify-center lg:justify-start"}"><a class="${"rounded-full bg-gradient-to-br from-orange-500 via-orange-500 to-yellow-500 px-6 py-3 text-lg font-semibold text-white hover:to-yellow-400 hover:drop-shadow-md md:text-xl"}" href="${"/getting_started"}">Get Started</a>
					<div class="${"flex items-center justify-center"}"><a href="${"https://github.com/gradio-app/gradio"}" class="${"cursor-pointer select-none inline-flex justify-center items-center whitespace-nowrap px-3 py-1 rounded-lg border bg-gradient-to-b focus:outline-none focus:ring text-gray-800 border-gray-200 from-white to-gray-100 hover:shadow-inner font-bold text-lg -mr-1"}"><svg class="${"dark:text-gray-200 mr-2"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" focusable="${"false"}" role="${"img"}" width="${"1.03em"}" height="${"1em"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 256 250"}"><path d="${"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403z"}" fill="${"currentColor"}"></path></svg>
							Star
						</a>
						<div class="${"relative ml-3"}"><div class="${"absolute z-[-1] -left-1 top-3 h-3 w-3 bg-gradient-to-t from-gray-100-to-white rounded-sm dark:bg-gray-900 border border-gray-200 dark:border-gray-850 flex-none transform rotate-45"}"></div>
							<a id="${"star-count"}" class="${"inset-0 cursor-pointer select-none inline-flex justify-center items-center whitespace-nowrap px-3 py-1 rounded-lg border bg-gradient-to-b focus:outline-none focus:ring text-gray-800 border-gray-200 from-white to-gray-100 hover:shadow-inner font-bold text-lg dark:hover:text-yellow-500 relative"}" href="${"https://github.com/gradio-app/gradio"}">${escape(star_count)}</a></div></div></div></div></div></div></div>
${validate_component(Demos, "Demos").$$render($$result, {}, {}, {})}
<div class="${"relative mx-auto container space-y-6 px-4 py-24 md:flex md:space-y-0 md:space-x-8 text-lg"}"><div class="${"shadow-alternate flex-1 rounded-xl border border-gray-100 p-6"}"><h2 class="${"mb-4 text-xl font-bold"}"><svg class="${"mr-2 mb-3 text-2xl text-gray-800"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" fill="${"currentColor"}" focusable="${"false"}" role="${"img"}" width="${"1em"}" height="${"1em"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 32 32"}"><rect class="${"text-orange-500"}" x="${"6.34"}" y="${"19"}" width="${"11.31"}" height="${"2"}" transform="${"translate(-10.63 14.34) rotate(-45)"}"></rect><path d="${"M17,30a1,1,0,0,1-.37-.07,1,1,0,0,1-.62-.79l-1-7,2-.28.75,5.27L21,24.52V17a1,1,0,0,1,.29-.71l4.07-4.07A8.94,8.94,0,0,0,28,5.86V4H26.14a8.94,8.94,0,0,0-6.36,2.64l-4.07,4.07A1,1,0,0,1,15,11H7.48L4.87,14.26l5.27.75-.28,2-7-1a1,1,0,0,1-.79-.62,1,1,0,0,1,.15-1l4-5A1,1,0,0,1,7,9h7.59l3.77-3.78A10.92,10.92,0,0,1,26.14,2H28a2,2,0,0,1,2,2V5.86a10.92,10.92,0,0,1-3.22,7.78L23,17.41V25a1,1,0,0,1-.38.78l-5,4A1,1,0,0,1,17,30Z"}"></path></svg>
			Fast, easy setup
		</h2>
		<p class="${"mb-3 text-gray-600"}">Gradio can be <a class="${"text-link"}" href="${"https://gradio.app/getting_started/"}">installed with pip</a>. Creating a Gradio interface only requires adding a couple lines of code
			to your project.
		</p>
		<p class="${"text-gray-600"}">You can choose from a variety of interface types to interface your
			function.
		</p></div>
	<div class="${"shadow-alternate flex-1 rounded-xl border border-t border-gray-100 p-6"}"><h2 class="${"mb-4 text-xl font-bold"}"><svg width="${"1em"}" height="${"1em"}" class="${"mr-2 mb-3 fill-current text-2xl text-gray-800"}" viewBox="${"0 0 1 1"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M0.675 0.590576H0.73125V0.731201H0.675V0.590576ZM0.5625 0.449951H0.61875V0.731201H0.5625V0.449951Z"}"></path><path class="${"text-orange-500"}" d="${"M0.210183 0.689964C0.236545 0.716326 0.272288 0.731157 0.30957 0.731201C0.346866 0.731201 0.382635 0.716385 0.409007 0.690013C0.43538 0.663641 0.450195 0.627872 0.450195 0.590576C0.450195 0.55328 0.43538 0.517512 0.409007 0.491139C0.382635 0.464767 0.346866 0.449951 0.30957 0.449951V0.506201C0.326258 0.506201 0.342571 0.51115 0.356447 0.520421C0.370322 0.529692 0.381137 0.54287 0.387523 0.558287C0.393909 0.573705 0.39558 0.59067 0.392324 0.607037C0.389068 0.623404 0.381032 0.638438 0.369232 0.650238C0.357432 0.662038 0.342398 0.670074 0.326031 0.67333C0.309664 0.676586 0.292699 0.674915 0.277281 0.668529C0.261864 0.662142 0.248686 0.651328 0.239415 0.637452C0.230144 0.623577 0.225195 0.607264 0.225195 0.590576H0.168945C0.16899 0.627859 0.18382 0.663601 0.210183 0.689964Z"}"></path><path d="${"M0.787402 0.0561523H0.112402C0.0974885 0.0561672 0.0831897 0.0620983 0.072644 0.072644C0.0620983 0.0831897 0.0561672 0.0974885 0.0561523 0.112402V0.787402C0.0561672 0.802316 0.0620983 0.816615 0.072644 0.827161C0.0831897 0.837706 0.0974885 0.843637 0.112402 0.843652H0.787402C0.802314 0.84363 0.816608 0.837697 0.827152 0.827152C0.837697 0.816608 0.84363 0.802314 0.843652 0.787402V0.112402C0.843637 0.0974885 0.837706 0.0831897 0.827161 0.072644C0.816615 0.0620983 0.802316 0.0561672 0.787402 0.0561523ZM0.787402 0.309277H0.393652V0.112402H0.787402V0.309277ZM0.337402 0.112402V0.309277H0.112402V0.112402H0.337402ZM0.112402 0.787402V0.365527H0.787402L0.787459 0.787402H0.112402Z"}"></path></svg>
			Present and share
		</h2>
		<p class="${"mb-3 text-gray-600"}">Gradio can be embedded in <a href="${"https://colab.research.google.com/drive/1T70IHFbztf_F0-HggwvM1PN7jBmS_wPN"}" class="${"text-link"}">Python notebooks</a>
			or presented as a
			<a href="${"https://huggingface.co/spaces/akhaliq/AnimeGANv2"}" class="${"text-link"}">webpage</a>.
		</p>
		<p class="${"text-gray-600"}">A Gradio interface can automatically generate a public link you can share
			with colleagues that lets them interact with the model on your computer
			remotely from their own devices.
		</p></div>
	<div class="${"shadow-alternate flex-1 rounded-xl border border-gray-100 p-6"}"><h2 class="${"mb-4 text-xl font-bold"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"mr-2 mb-3 text-2xl text-gray-800"}" width="${"1em"}" height="${"1em"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 32 32"}"><path fill="${"currentColor"}" d="${"M16 2a8 8 0 1 0 8 8a8.01 8.01 0 0 0-8-8zm5.91 7h-2.438a15.246 15.246 0 0 0-.791-4.36A6.009 6.009 0 0 1 21.91 9zm-5.888 6.999h-.008c-.38-.12-1.309-1.821-1.479-4.999h2.93c-.17 3.176-1.094 4.877-1.443 4.999zM14.535 9c.17-3.176 1.094-4.877 1.443-4.999h.008c.38.12 1.309 1.821 1.479 4.999zM13.32 4.64A15.246 15.246 0 0 0 12.528 9H10.09a6.009 6.009 0 0 1 3.23-4.36zM10.09 11h2.437a15.246 15.246 0 0 0 .792 4.36A6.009 6.009 0 0 1 10.09 11zm8.59 4.36a15.246 15.246 0 0 0 .792-4.36h2.438a6.009 6.009 0 0 1-3.23 4.36zM28 30H4a2.002 2.002 0 0 1-2-2v-6a2.002 2.002 0 0 1 2-2h24a2.002 2.002 0 0 1 2 2v6a2.002 2.002 0 0 1-2 2zM4 22v6h24v-6z"}"></path><circle cx="${"7"}" cy="${"25"}" r="${"1"}" class="${"fill-current text-orange-500"}"></circle></svg>
			Permanent hosting
		</h2>
		<p class="${"mb-3 text-gray-600"}">Once you&#39;ve created an interface, you can permanently host it on Hugging
			Face.
		</p>
		<p class="${"text-gray-600"}"><a href="${"https://huggingface.co/spaces"}" class="${"text-link"}">Hugging Face Spaces</a> will host the interface on its servers and provide you with a link you can
			share.
		</p></div></div>
<div class="${"text-center"}"><h2 class="${"mb-2 inline-block bg-white px-5 text-gray-400"}">Used by</h2>
	<div class="${"border-t border-b border-gray-100 bg-gradient-to-t from-gray-50 px-4 pt-24 pb-32"}" style="${"margin-top: -1.2rem;"}"><div class="${"mx-auto grid container grid-cols-3 justify-items-center gap-x-3 gap-y-8 grayscale sm:gap-x-4 md:grid-cols-5"}">${each(logos, (logo) => {
    return `<img class="${["logo h-4 sm:h-5", logo.contrast ? "constrast-0" : ""].join(" ").trim()}"${add_attribute("src", logo.img, 0)}${add_attribute("alt", logo.description, 0)}>`;
  })}</div></div></div>
<div class="${"pt-12 md:pt-20 mx-auto container px-4"}"><div class="${"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"}">${each(tweets, (tweet) => {
    return `<a${add_attribute("href", tweet["link"], 0)} class="${"rounded-xl border border-gray-200 bg-white p-4 hover:shadow dark:border-gray-800 dark:bg-gray-800"}"><div class="${"flex justify-between"}"><div class="${"flex items-center gap-2"}"><img class="${"h-11 w-11 rounded-full"}"${add_attribute("src", tweet.profile_pic, 0)} alt="${""}">
						<div class="${"ml-1.5 text-sm leading-tight"}"><span class="${"block font-bold text-black dark:text-white"}">${escape(tweet["name"])}</span>
							<span class="${"block font-normal text-gray-500 dark:text-gray-400"}">@${escape(tweet["handle"])}</span>
						</div></div>
					<svg class="${"inline-block h-6 w-auto fill-current text-blue-400 dark:text-white"}" viewBox="${"0 0 24 24"}"><g><path d="${"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"}"></path></g></svg></div>
				<p class="${"mt-3 block leading-snug text-black dark:text-white"}"><!-- HTML_TAG_START -->${tweet["content"]}<!-- HTML_TAG_END --></p>
				<p class="${"my-0.5 flex items-center py-1 text-base text-gray-500 dark:text-gray-400"}"><svg viewBox="${"0 0 24 24"}" class="${"mr-1 h-3.5 w-4 fill-current r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"}" style="${""}"><g><path d="${"M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"}"></path></g></svg>
					${escape(tweet["likes"])} \xB7 ${escape(tweet["timestamp"])}</p>
			</a>`;
  })}</div>
</div>`;
});
export {
  Page as default
};
