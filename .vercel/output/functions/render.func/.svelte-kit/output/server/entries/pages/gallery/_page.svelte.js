import { c as create_ssr_component, d as each, e as escape, v as validate_component } from "../../../chunks/index.js";
import { T as Top } from "../../../chunks/top.js";
import { F as Footer } from "../../../chunks/footer.js";
let imgs = 26;
const Gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log("in component");
  let y = imgs / 6;
  y = parseInt(y);
  console.log(y);
  return `<section class="${"overflow-hidden text-gray-700"}">${each(Array(y), (_, i) => {
    return `<div class="${"container px-5 py-2 mx-auto lg:pt-4 lg:px-32"}"><div class="${"flex flex-col md:flex-row md:flex-wrap -m-1 md:-m-2"}"><div class="${"flex flex-wrap md:w-1/2"}"><div class="${"w-1/2 p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear"}"><img alt="${"gallery"}" class="${"block img-home object-cover object-center w-full h-full rounded-lg"}" src="${"./gallery/img (" + escape(0 + i * 6, true) + ").jpeg"}"></div>
			  <div class="${"w-1/2 p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear"}"><img alt="${"gallery"}" class="${"block img-home object-cover object-center w-full h-full rounded-lg"}" src="${"./gallery/img (" + escape(1 + i * 6, true) + ").jpeg"}"></div>
			  <div class="${"w-full p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear"}"><img alt="${"gallery"}" class="${"block img-home object-cover object-center w-full h-full rounded-lg"}" src="${"./gallery/img (" + escape(2 + i * 6, true) + ").jpeg"}">
			  </div></div>
			<div class="${"flex flex-wrap md:w-1/2"}"><div class="${"w-full p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear"}"><img alt="${"gallery"}" class="${"block img-home object-cover object-center w-full h-full rounded-lg"}" src="${"./gallery/img (" + escape(3 + i * 6, true) + ").jpeg"}"></div>
			  <div class="${"w-1/2 p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear"}"><img alt="${"gallery"}" class="${"block img-home object-cover object-center w-full h-full rounded-lg"}" src="${"./gallery/img (" + escape(4 + i * 6, true) + ").jpeg"}"></div>
			  <div class="${"w-1/2 p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear"}"><img alt="${"gallery"}" class="${"block img-home object-cover object-center w-full h-full rounded-lg"}" src="${"./gallery/img (" + escape(5 + i * 6, true) + ").jpeg"}"></div>
			</div></div>
	</div>`;
  })}</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Top, "Top").$$render(
    $$result,
    {
      name: "Gallery",
      heading: "Gallery",
      bgImage: "./top-1.jpg"
    },
    {},
    {}
  )}
${validate_component(Gallery, "Gallery").$$render($$result, {}, {}, {})}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
