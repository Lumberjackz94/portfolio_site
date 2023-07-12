import { c as create_ssr_component } from "../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "html{background-color:#f3f4f6}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="min-h-screen flex flex-col">${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  Page as default
};
