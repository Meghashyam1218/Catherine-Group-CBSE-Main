import { c as create_ssr_component, d as each, e as escape, v as validate_component } from "../../../chunks/index.js";
import { T as Top } from "../../../chunks/top.js";
let imgs = 26;
const Gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log("in component");
  let y = imgs / 6;
  y = parseInt(y);
  console.log(y);
  return `<section class="${"overflow-hidden text-gray-700"}"><div class="${"gallery-head w-[90vw] mx-auto flex flex-col md:flex-row justify-between items-center p-4"}"><h1 class="${"md:text-6xl text-4xl 2xs:text-4xl font-black lg::basis-3/4 text-gray-800 md:m-4 md:ml-6"}">Gallery
		</h1>
		<div class="${"lg:flex hidden lg:basis-1/4 scale-[0.7] md:scale-[1] justify-end md:mr-20"}"><div class="${"arrow-left pointer-events-none opacity-0 rotate-0 md:ml-6"}"><svg width="${"50pt"}" height="${"50pt"}" viewBox="${"0 0 100.000000 100.000000"}" preserveAspectRatio="${"xMidYMid meet"}"><g transform="${"translate(0.000000,100.000000) scale(0.100000,-0.100000)"}" fill="${"rgb(66, 66, 66)"}" stroke="${"none"}"><path d="${"M386 944 c-225 -54 -376 -286 -338 -517 62 -367 512 -513 773 -252\r\n                    329 330 18 879 -435 769z m219 -39 c312 -81 418 -473 191 -701 -241 -240 -651\r\n                    -107 -709 230 -50 295 226 546 518 471z"}"></path><path d="${"M325 590 l-90 -90 92 -92 c73 -73 95 -90 105 -80 10 10 -2 27 -57 82\r\n                    l-69 70 224 2 c192 3 225 5 225 18 0 13 -33 15 -225 18 l-224 2 68 69 c59 60\r\n                    76 91 48 91 -4 0 -48 -41 -97 -90z"}"></path></g></svg></div>
			<div class="${"arrow-right pointer-events-none opacity-0 rotate-180 md:ml-6"}"><svg width="${"50pt"}" height="${"50pt"}" viewBox="${"0 0 100.000000 100.000000"}" preserveAspectRatio="${"xMidYMid meet"}"><g transform="${"translate(0.000000,100.000000) scale(0.100000,-0.100000)"}" fill="${"rgb(66, 66, 66)"}" stroke="${"none"}"><path d="${"M386 944 c-225 -54 -376 -286 -338 -517 62 -367 512 -513 773 -252\r\n                    329 330 18 879 -435 769z m219 -39 c312 -81 418 -473 191 -701 -241 -240 -651\r\n                    -107 -709 230 -50 295 226 546 518 471z"}"></path><path d="${"M325 590 l-90 -90 92 -92 c73 -73 95 -90 105 -80 10 10 -2 27 -57 82\r\n                    l-69 70 224 2 c192 3 225 5 225 18 0 13 -33 15 -225 18 l-224 2 68 69 c59 60\r\n                    76 91 48 91 -4 0 -48 -41 -97 -90z"}"></path></g></svg></div></div></div>

	${each(Array(y), (_, i) => {
    return `<div class="${"w-1/2 p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear"}"><img alt="${"gallery"}" class="${"block img-home object-cover object-center w-full h-full rounded-lg"}" src="${"./gallery/img (" + escape(0 * i + 6 * i, true) + ").jpeg"}"></div>
		<div class="${"w-1/2 p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear"}"><img alt="${"gallery"}" class="${"block img-home object-cover object-center w-full h-full rounded-lg"}" src="${"./gallery/img (" + escape(0 * i + 6 * i, true) + ").jpeg"}"></div>
		<div class="${"w-1/2 p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear"}"><img alt="${"gallery"}" class="${"block img-home object-cover object-center w-full h-full rounded-lg"}" src="${"./gallery/img (" + escape(1 * i + 6 * i, true) + ").jpeg"}"></div>
		${``}`;
  })}

	
	<div class="${"max-w-[150px] my-10 mx-auto"}"><a href="${"#/"}" class="${"p-4 bg-blue-800 text-white font-semibold rounded-2xl text-center"}">Load More</a></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Top, "Top").$$render($$result, {}, {}, {})}
${validate_component(Gallery, "Gallery").$$render($$result, {}, {}, {})}
`;
});
export {
  Page as default
};
