import { c as create_ssr_component, e as escape, f as add_attribute } from "./index.js";
import "./footer.js";
const css = {
  code: "@media only screen and (max-width: 640px){.nav.svelte-1wqvfh3.svelte-1wqvfh3{grid-template-columns:1fr 1fr}}.nav.svelte-1wqvfh3.svelte-1wqvfh3{grid-template-columns:1fr 250px 1fr}.button-menu.svelte-1wqvfh3.svelte-1wqvfh3{border-radius:34px;font-size:18px;display:flex;align-items:center;transition:background-color 0.4s ease, background 0.4s ease, color 0.4s ease;border:none}.button__icon.svelte-1wqvfh3 svg.svelte-1wqvfh3{width:24px;height:24px;transition:all 0.4s ease}.button-menu.svelte-1wqvfh3:hover .button__icon svg.svelte-1wqvfh3{transform:rotate(90deg);transition:all 0.4s ease}.menu-list.svelte-1wqvfh3.svelte-1wqvfh3{display:inline-block;position:relative}.menu-list.svelte-1wqvfh3.svelte-1wqvfh3::after{content:'';position:absolute;width:100%;transform:scaleX(0);bottom:0;left:0;background-color:#0c1637;transform-origin:bottom right;transition:transform 0.25s ease-out}.menu-list2.svelte-1wqvfh3.svelte-1wqvfh3::after{background-color:#fff}.menu-list.svelte-1wqvfh3.svelte-1wqvfh3:hover::after{transform:scaleX(1);transform-origin:bottom left}",
  map: null
};
const Top = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "Component" } = $$props;
  let { heading = "Component Heading" } = $$props;
  let { bgImage = "/herobg.png" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  if ($$props.bgImage === void 0 && $$bindings.bgImage && bgImage !== void 0)
    $$bindings.bgImage(bgImage);
  $$result.css.add(css);
  return `<section class="${"z-[999] h-[0px] fixed top-0"}"><div class="${"w-[100vw] navmain translate-y-[-85px] transition-all duration-500 ease-linear bg-white h-[70px] md:h-[85px] pt-[5px] md:pt-[10px] px-[25px] md:px-[24px] xl:px-[42px] " + escape(
    "rounded-b-[2rem] shadow-md",
    true
  )}"><div class="${"nav grid svelte-1wqvfh3"}"><div>${`<button aria-label="${"Open main menu "}" tabindex="${"1"}" aria-haspopup="${"true"}" class="${"bg-[#0c1637] button-menu py-[15px] px-[15px] md:px-[30px] button--white header__menu-btn-open transition-all duration-500 ease-linear  svelte-1wqvfh3"}"><span class="${"button__icon-menu svelte-1wqvfh3"}"><svg class="${"mr-0 lg:mr-[20px] fill-white svelte-1wqvfh3"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" role="${"img"}"><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M23.5 6C23.7761 6 24 5.77614 24 5.5C24 5.22386 23.7761 5 23.5 5L0.5 5C0.223858 5 0 5.22386 0 5.5C0 5.77614 0.223858 6 0.5 6L23.5 6ZM24 12.5C24 12.7761 23.7761 13 23.5 13L0.5 13C0.223858 13 0 12.7761 0 12.5C0 12.2239 0.223858 12 0.5 12L23.5 12C23.7761 12 24 12.2239 24 12.5ZM24 19.5C24 19.7761 23.7761 20 23.5 20L0.5 20C0.223858 20 0 19.7761 0 19.5C0 19.2239 0.223858 19 0.5 19L23.5 19C23.7761 19 24 19.2239 24 19.5Z"}"></path></svg></span>
						<span class="${"hidden text-white lg:inline svelte-1wqvfh3"}">Explore more</span></button>`}</div>
			<a href="${"/"}" class="${"flex items-center justify-center cursor-pointer"}"><img src="${"./logo.png"}" class="${"h-[40px] mr-2"}">
				<span class="${"text-2xl font-bold"}">Catherine CBSE</span></a>
			<div class="${"header__nav anim--fade--reverse anim--fade--reverse--in lg:flex justify-end items-center hidden"}"><ul class="${"header__nav-links flex "}"><li class="${"" + escape("inline-block", true)}"><a href="${"/md"}" aria-label="${"Educational Resources"}" tabindex="${"1"}" class="${"link menu-list after:h-[1px] text-sm xl:text-base text-[#0c1637] svelte-1wqvfh3"}"><span>Mandatory Disclosure</span></a></li>
					<li class="${"" + escape("inline-block ml-[24px]", true)}"><a href="${"/contactus"}" aria-label="${"Community"}" tabindex="${"1"}" class="${"link menu-list after:h-[1px] text-[#0c1637] svelte-1wqvfh3"}"><span>Contact Us</span></a></li>
					<li class="${"inline-block ml-[24px]"}"><a href="${"/community"}" aria-label="${"Community"}" tabindex="${"1"}" class="${"link flex flex-roww text-[#0c1637]"}"><span class="${"inline mr-2"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"}"></path></svg>
							</span><a class="${"inline menu-list after:h-[1px] svelte-1wqvfh3"}">Live Chat</a></a></li></ul></div></div></div>
	${``}
	${``}</section>

<section class="${""}"><div class="${"hero-container relative overflow-hidden "}"><div class="${"fake-border2 border-[#f5f5f5] backdrop-blur-xl lg:border-t-[20px] lg:border-x-[20px] md:border-t-[15px] md:border-x-[15px] absolute top-0 max-h-[500px] lg:h-[70vh] w-[100%] h-[350px] md:h-[60vh]"}"><div class="${"navfake mt-[60px] md:mt-[130px] lg:mt-[170px] mb-10 flex flex-col justify-center"}"><div id="${"dontknow"}" class="${"nav absolute top-[20px] w-[100%] px-5 grid items-center svelte-1wqvfh3"}"><div><button aria-label="${"Open main menu "}" tabindex="${"1"}" aria-haspopup="${"true"}" class="${"bg-[#fff] max-md:mx-auto button-menu py-[15px] px-[15px] md:px-[30px] button--white header__menu-btn-open transition-all duration-500 ease-linear  svelte-1wqvfh3"}"><span class="${"button__icon-menu svelte-1wqvfh3"}"><svg class="${"mr-0 lg:mr-[20px] fill-[#0c1637] svelte-1wqvfh3"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" role="${"img"}"><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M23.5 6C23.7761 6 24 5.77614 24 5.5C24 5.22386 23.7761 5 23.5 5L0.5 5C0.223858 5 0 5.22386 0 5.5C0 5.77614 0.223858 6 0.5 6L23.5 6ZM24 12.5C24 12.7761 23.7761 13 23.5 13L0.5 13C0.223858 13 0 12.7761 0 12.5C0 12.2239 0.223858 12 0.5 12L23.5 12C23.7761 12 24 12.2239 24 12.5ZM24 19.5C24 19.7761 23.7761 20 23.5 20L0.5 20C0.223858 20 0 19.7761 0 19.5C0 19.2239 0.223858 19 0.5 19L23.5 19C23.7761 19 24 19.2239 24 19.5Z"}"></path></svg></span>
							<span class="${"hidden text-[#0c1637] font-medium lg:inline svelte-1wqvfh3"}">Explore more</span></button></div>

					<a href="${"/#"}" class="${"flex cursor-pointer items-center justify-center "}"><img src="${"./logo.png"}" class="${"h-[50px] mr-2"}">
						<span class="${"logo text-2xl text-white font-bold"}">Catherine CBSE</span></a>
					<div class="${"header__nav anim--fade--reverse anim--fade--reverse--in lg:flex justify-end items-center hidden"}"><ul class="${"header__nav-links flex "}"><li class="${"" + escape("inline-block", true)}"><a href="${"/md"}" aria-label="${"Educational Resources"}" tabindex="${"1"}" class="${"text-sm xl:text-base text-[#fff] link font-medium menu-list menu-list2 after:h-[1px]  svelte-1wqvfh3"}"><span>Mandatory Disclosure</span></a></li>
							<li class="${"" + escape("inline-block ml-[24px]", true)}"><a href="${"/contactus"}" aria-label="${"Community"}" tabindex="${"1"}" class="${"link font-medium menu-list menu-list2 after:h-[1px] text-[#fff] svelte-1wqvfh3"}"><span>Contact Us</span></a></li>
							<li class="${"inline-block ml-[24px]"}"><a href="${"/community"}" aria-label="${"Community"}" tabindex="${"1"}" class="${"link flex flex-roww text-[#fff]"}"><span class="${"inline mr-2"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"}"></path></svg>
									</span><a class="${"hidden lg:menu-list after:h-[1px]"}">Live Chat</a></a></li></ul></div></div></div>

            <a id="${"bread"}" class="${"m-10"}"><span class="${"text-white"}"><a href="${"/"}" class="${"p-2 text-white font-regular tracking-widest"}">Home</a>-</span><span class="${""}"><a class="${"p-2 text-white tracking-widest"}">${escape(name)}</a></span></a>
			<h1 id="${"component"}" class="${"2xs:ml-10 mt-5 text-6xl md:text-6xl lg:text-8xl font-bold text-white max-w-[1000px]"}">${escape(heading)}</h1>

            <a class="${"z-[-30] md:block hidden absolute scale-y-[-1] scale-x-[-1] left-[-5px] top-[-5px]"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 36 36"}" role="${"img"}" class="${"corner w-[30px] bottom-left"}"><path d="${"M35.93,29.89V0H29.84A29.89,29.89,0,0,1,0,29.89H0V36H36v-6.1Z"}" transform="${"translate(0.04 0.01)"}" fill="${"#f5f5f5"}"></path></svg></a>
			<a class="${"z-[-30] md:block hidden absolute scale-y-[-1] right-[-5px] top-[-5px]"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 36 36"}" role="${"img"}" class="${"corner w-[30px] bottom-left"}"><path d="${"M35.93,29.89V0H29.84A29.89,29.89,0,0,1,0,29.89H0V36H36v-6.1Z"}" transform="${"translate(0.04 0.01)"}" fill="${"#f5f5f5"}"></path></svg></a>
			<a class="${"z-[-30] absolute scale-x-[-1] left-[-5px] bottom-[-5px]"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 36 36"}" role="${"img"}" class="${"corner w-[30px] bottom-left"}"><path d="${"M35.93,29.89V0H29.84A29.89,29.89,0,0,1,0,29.89H0V36H36v-6.1Z"}" transform="${"translate(0.04 0.01)"}" fill="${"#f5f5f5"}"></path></svg></a>
			<a class="${"z-[-30] absolute right-[-5px] bottom-[-5px]"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 36 36"}" role="${"img"}" class="${"corner w-[30px] bottom-left"}"><path d="${"M35.93,29.89V0H29.84A29.89,29.89,0,0,1,0,29.89H0V36H36v-6.1Z"}" transform="${"translate(0.04 0.01)"}" fill="${"#f5f5f5"}"></path></svg></a></div>

		<div class="${"relative z-[-50] bg-cover bg-right-bottom w-[100%] max-h-[500px] lg:h-[70vh] h-[350px] md:h-[60vh] brightness-[.65]"}"${add_attribute("style", `background-image: url(${bgImage});`, 0)}></div></div>
</section>`;
});
export {
  Top as T
};
