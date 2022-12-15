import { c as create_ssr_component, e as escape, b as subscribe, d as each, f as add_attribute, v as validate_component } from "../../chunks/index.js";
import { w as writable } from "../../chunks/index2.js";
/* empty css                                              */import { F as Footer } from "../../chunks/footer.js";
const hero_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "@media only screen and (max-width: 640px){.nav.svelte-yphymm.svelte-yphymm{grid-template-columns:1fr 1fr}}.nav.svelte-yphymm.svelte-yphymm{grid-template-columns:1fr 250px 1fr}.button-menu.svelte-yphymm.svelte-yphymm{border-radius:34px;font-size:18px;display:flex;align-items:center;transition:background-color 0.4s ease, background 0.4s ease, color 0.4s ease;border:none}.button__icon.svelte-yphymm svg.svelte-yphymm{width:24px;height:24px;transition:all 0.4s ease}.button-menu.svelte-yphymm:hover .button__icon svg.svelte-yphymm{transform:rotate(90deg);transition:all 0.4s ease}.menu-list.svelte-yphymm.svelte-yphymm{display:inline-block;position:relative}.menu-list.svelte-yphymm.svelte-yphymm::after{content:'';position:absolute;width:100%;transform:scaleX(0);bottom:0;left:0;background-color:#0c1637;transform-origin:bottom right;transition:transform 0.25s ease-out}.menu-list2.svelte-yphymm.svelte-yphymm::after{background-color:#fff}.menu-list.svelte-yphymm.svelte-yphymm:hover::after{transform:scaleX(1);transform-origin:bottom left}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="${"z-[999] h-[0px] fixed top-0"}"><div class="${"w-[100vw] navmain translate-y-[-85px] transition-all duration-500 ease-linear bg-white h-[70px] md:h-[85px] pt-[5px] md:pt-[10px] px-[25px] md:px-[24px] xl:px-[42px] " + escape(
    "rounded-b-[2rem] shadow-md",
    true
  )}"><div class="${"nav grid svelte-yphymm"}"><div>${`<button aria-label="${"Open main menu "}" tabindex="${"1"}" aria-haspopup="${"true"}" class="${"bg-[#0c1637] button-menu py-[15px] px-[15px] md:px-[30px] button--white header__menu-btn-open transition-all duration-500 ease-linear  svelte-yphymm"}"><span class="${"button__icon-menu svelte-yphymm"}"><svg class="${"mr-0 lg:mr-[20px] fill-white svelte-yphymm"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" role="${"img"}"><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M23.5 6C23.7761 6 24 5.77614 24 5.5C24 5.22386 23.7761 5 23.5 5L0.5 5C0.223858 5 0 5.22386 0 5.5C0 5.77614 0.223858 6 0.5 6L23.5 6ZM24 12.5C24 12.7761 23.7761 13 23.5 13L0.5 13C0.223858 13 0 12.7761 0 12.5C0 12.2239 0.223858 12 0.5 12L23.5 12C23.7761 12 24 12.2239 24 12.5ZM24 19.5C24 19.7761 23.7761 20 23.5 20L0.5 20C0.223858 20 0 19.7761 0 19.5C0 19.2239 0.223858 19 0.5 19L23.5 19C23.7761 19 24 19.2239 24 19.5Z"}"></path></svg></span>
						<span class="${"hidden text-white lg:inline svelte-yphymm"}">Explore more</span></button>`}</div>
			<a href="${"/"}" class="${"flex items-center justify-center cursor-pointer"}"><img src="${"./logo.png"}" class="${"h-[40px] mr-2"}">
				<span class="${"text-2xl font-bold"}">Catherine CBSE</span></a>
			<div class="${"header__nav anim--fade--reverse anim--fade--reverse--in lg:flex justify-end items-center hidden"}"><ul class="${"header__nav-links flex "}"><li class="${"" + escape("inline-block", true)}"><a href="${"/md"}" aria-label="${"Educational Resources"}" tabindex="${"1"}" class="${"link menu-list after:h-[1px] text-sm xl:text-base text-[#0c1637] svelte-yphymm"}"><span>Mandatory Disclosure</span></a></li>
					<li class="${"" + escape("inline-block ml-[24px]", true)}"><a href="${"/contactus"}" aria-label="${"Community"}" tabindex="${"1"}" class="${"link menu-list after:h-[1px] text-[#0c1637] svelte-yphymm"}"><span>Contact Us</span></a></li>
					<li class="${"inline-block ml-[24px]"}"><a href="${"#/"}" aria-label="${"Community"}" tabindex="${"1"}" class="${"link flex flex-roww text-[#0c1637]"}"><span class="${"inline mr-2"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"}"></path></svg>
							</span><a class="${"inline menu-list after:h-[1px] svelte-yphymm"}">Live Chat</a></a></li></ul></div></div></div>
	${``}
	${``}</section>

<section class="${""}"><div class="${"hero-container relative overflow-hidden "}"><div class="${"fake-border border-[#f5f5f5] backdrop-blur-xl border-b-0 lg:border-[20px] md:border-[15px] absolute top-0 lg:h-[120vh] w-[100%] h-[90vh] md:h-[110vh]"}"><div class="${"mt-[60px] md:mt-[130px] lg:mt-[170px] flex flex-col justify-center h-[80vh] md:h-[70vh]"}"><div id="${"heronav"}" class="${"nav absolute top-[20px] w-[100%] px-5 grid items-center svelte-yphymm"}"><div><button aria-label="${"Open main menu "}" tabindex="${"1"}" aria-haspopup="${"true"}" class="${"bg-[#fff] max-md:mx-auto button-menu py-[15px] px-[15px] md:px-[30px] button--white header__menu-btn-open transition-all duration-500 ease-linear  svelte-yphymm"}"><span class="${"button__icon-menu svelte-yphymm"}"><svg class="${"mr-0 lg:mr-[20px] fill-[#0c1637] svelte-yphymm"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" role="${"img"}"><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M23.5 6C23.7761 6 24 5.77614 24 5.5C24 5.22386 23.7761 5 23.5 5L0.5 5C0.223858 5 0 5.22386 0 5.5C0 5.77614 0.223858 6 0.5 6L23.5 6ZM24 12.5C24 12.7761 23.7761 13 23.5 13L0.5 13C0.223858 13 0 12.7761 0 12.5C0 12.2239 0.223858 12 0.5 12L23.5 12C23.7761 12 24 12.2239 24 12.5ZM24 19.5C24 19.7761 23.7761 20 23.5 20L0.5 20C0.223858 20 0 19.7761 0 19.5C0 19.2239 0.223858 19 0.5 19L23.5 19C23.7761 19 24 19.2239 24 19.5Z"}"></path></svg></span>
							<span class="${"hidden text-[#0c1637] font-medium lg:inline svelte-yphymm"}">Explore more</span></button></div>

					<a href="${"/"}" class="${"flex items-center justify-center cursor-pointer"}"><img src="${"./logo.png"}" class="${"h-[50px] mr-2"}">
						<span class="${"logo text-2xl text-white font-bold"}">Catherine CBSE</span></a>
					<div class="${"header__nav anim--fade--reverse anim--fade--reverse--in lg:flex justify-end items-center hidden"}"><ul class="${"header__nav-links flex "}"><li class="${"" + escape("inline-block", true)}"><a href="${"/md"}" aria-label="${"Educational Resources"}" tabindex="${"1"}" class="${"text-sm xl:text-base text-[#fff] link font-medium menu-list menu-list2 after:h-[1px]  svelte-yphymm"}"><span>Mandatory Disclosure</span></a></li>
							<li class="${"" + escape("inline-block ml-[24px]", true)}"><a href="${"/contactus"}" aria-label="${"Community"}" tabindex="${"1"}" class="${"link font-medium menu-list menu-list2 after:h-[1px] text-[#fff] svelte-yphymm"}"><span>Contact Us</span></a></li>
							</ul></div></div>
				<h1 class="${"dive-text text-5xl mt-5 2xs:text-6xl z-0 md:text-8xl lg:text-9xl text-white text-center font-black"}">DIVE INTO<br>LEARINING
				</h1>
				<h1 class="${"tagline text-white text-sm md:text-2xl font-bold text-center tracking-widest"}">You are the light of the world
				</h1>
				<img class="${"heroimg w-[80%] h-[500px] md:h-[80%] max-w-[1500px] object-cover mx-auto mt-6 rounded-[2.5rem]"}" src="${"./herobg.png"}"></div>
			<a class="${"z-[-30] md:block hidden absolute scale-y-[-1] scale-x-[-1] left-[-5px] top-[-5px]"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 36 36"}" role="${"img"}" class="${"corner w-[30px] bottom-left"}"><path d="${"M35.93,29.89V0H29.84A29.89,29.89,0,0,1,0,29.89H0V36H36v-6.1Z"}" transform="${"translate(0.04 0.01)"}" fill="${"#f5f5f5"}"></path></svg></a>
			<a class="${"z-[-30] md:block hidden absolute scale-y-[-1] right-[-5px] top-[-5px]"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 36 36"}" role="${"img"}" class="${"corner w-[30px] bottom-left"}"><path d="${"M35.93,29.89V0H29.84A29.89,29.89,0,0,1,0,29.89H0V36H36v-6.1Z"}" transform="${"translate(0.04 0.01)"}" fill="${"#f5f5f5"}"></path></svg></a>
			<a class="${"z-[-30] absolute scale-x-[-1] left-[-5px] bottom-[-5px]"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 36 36"}" role="${"img"}" class="${"corner w-[30px] bottom-left"}"><path d="${"M35.93,29.89V0H29.84A29.89,29.89,0,0,1,0,29.89H0V36H36v-6.1Z"}" transform="${"translate(0.04 0.01)"}" fill="${"#f5f5f5"}"></path></svg></a>
			<a class="${"z-[-30] absolute right-[-5px] bottom-[-5px]"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 36 36"}" role="${"img"}" class="${"corner w-[30px] bottom-left"}"><path d="${"M35.93,29.89V0H29.84A29.89,29.89,0,0,1,0,29.89H0V36H36v-6.1Z"}" transform="${"translate(0.04 0.01)"}" fill="${"#f5f5f5"}"></path></svg></a></div>

		<div class="${"relative z-[-50] w-[100%] lg:h-[120vh] h-[90vh] md:h-[110vh] brightness-[.65]"}" style="${"background-image: url(/herobg.png);"}"></div></div>
</section>`;
});
const Why = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"h-90vh"}"><div class="${"flex 3xs:flex-col xl:flex-row m-[10%]"}"><div class="${"flex flex-col xl:w-[50vw]"}"><div><p class="${"xl:text-3xl 3xs:text-2xl font-semibold"}">What is Catherine?</p></div>
            <div class="${"mt-[5%] xl:mr-[10%]"}"><p class="${"xl:text-xl text-base text-justify leading-8"}">Catherine Schools was founded in 1983 by R.D.Ratna Raju and Lt. Prof (Mrs) Satya Bala. This Christian Minority Institution educates,nurtures and inspires girls and boys of diverse backgrounds to acheive their highest academic and creative potential, to embrase ethical values, and to become active cintributors to their communities.</p></div>
            <a href="${"/aboutus"}" class="${"mt-[5%] 3xs:grid 3xs:self-center xl:self-start"}"><button class="${"bg-[#0c1637] text-white xl:text-xl text-base font-semibold p-2 xl:p-4 rounded-full duration-700 hover:bg-white hover:text-[#0c1637]"}">Explore more</button></a></div>
        <div class="${"flex flex-col xl:w-[40vw] pt-[5%] xl:pl-[5%] space-y-6"}"><div><p class="${"xl:text-xl text-base text-justify leading-8"}">The founders both being retired professors have been serving the cause of education for more than 45 years. they dram from the rich exposure to education system in Europe, America and Asia and the amazing story of Catherine School, which has already established a legacy of academic excellence, is a story that continues unfold</p></div>
            <div class="${"pt-[5%]"}"><img src="${"./cbse logo.webp"}" class="${""}"></div></div></div></section>`;
});
const Events = writable([
  {
    date: "15/12/2022",
    name: "Event Heading 1",
    image: "/events/1.png",
    description: " consectetur mollit elit sunt laborum. Mollit Lorem id occaecat Lorem dolor magna velit enim."
  },
  {
    date: "15/12/2022",
    name: "Event Heading 2",
    image: "/events/2.png",
    description: " consectetur mollit elit sunt laborum. Mollit Lorem id occaecat Lorem dolor magna velit enim."
  },
  {
    date: "15/12/2022",
    name: "Event Heading 3",
    image: "/events/3.png",
    description: " consectetur mollit elit sunt laborum. Mollit Lorem id occaecat Lorem dolor magna velit enim."
  },
  {
    date: "15/12/2022",
    name: "Event Heading 4",
    image: "/events/4.png",
    description: " consectetur mollit elit sunt laborum. Mollit Lorem id occaecat Lorem dolor magna velit enim."
  },
  {
    date: "15/12/2022",
    name: "Event Heading 5",
    image: "/events/5.png",
    description: " consectetur mollit elit sunt laborum. Mollit Lorem id occaecat Lorem dolor magna velit enim."
  },
  {
    date: "15/12/2022",
    name: "Event Heading 6",
    image: "/events/6.png",
    description: " consectetur mollit elit sunt laborum. Mollit Lorem id occaecat Lorem dolor magna velit enim."
  },
  {
    date: "15/12/2022",
    name: "Event Heading 7",
    image: "/events/7.png",
    description: " consectetur mollit elit sunt laborum. Mollit Lorem id occaecat Lorem dolor magna velit enim."
  },
  {
    date: "15/12/2022",
    name: "Event Heading 8",
    image: "/events/8.png",
    description: " consectetur mollit elit sunt laborum. Mollit Lorem id occaecat Lorem dolor magna velit enim."
  }
]);
const cards_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".events-container.svelte-uysmup.svelte-uysmup{scroll-behavior:smooth}.card-content.svelte-uysmup.svelte-uysmup{pointer-events:none;box-shadow:0 60px 44px -49px rgb(40 46 74 / 20%);border:1px solid #e7ebeb}.events-container.svelte-uysmup.svelte-uysmup::-webkit-scrollbar{display:none}.events-container.svelte-uysmup.svelte-uysmup{-webkit-overflow-scrolling:touch}.card.svelte-uysmup.svelte-uysmup{flex:0 0 auto;cursor:pointer}.card-image-child.svelte-uysmup.svelte-uysmup{transition:all 0.6s ease}.card.svelte-uysmup:hover .card-image-child.svelte-uysmup,.card.svelte-uysmup:focus .card-image-child.svelte-uysmup{transform:scale(1.2);transition:all 0.6s ease}#grad1.svelte-uysmup.svelte-uysmup,#grad2.svelte-uysmup.svelte-uysmup{transition:all 0.7s ease;box-shadow:0 -22px 4px -20px rgb(5 25 122 / 15%)}.card.svelte-uysmup:hover #grad-1.svelte-uysmup,.card.svelte-uysmup:focus #grad-1.svelte-uysmup{transform:translateY(-5px);transition:all 0.5s ease;opacity:1}.card.svelte-uysmup:hover #grad-2.svelte-uysmup,.card.svelte-uysmup:focus #grad-1.svelte-uysmup{transform:translateY(-5px);transition:all 0.7s ease;opacity:1}.card.svelte-uysmup:hover .content-view.svelte-uysmup,.card.svelte-uysmup:focus .content-view.svelte-uysmup{color:rgba(0, 0, 0, 0.753);color:rgb(66, 66, 66)}",
  map: null
};
const Cards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $Events, $$unsubscribe_Events;
  $$unsubscribe_Events = subscribe(Events, (value) => $Events = value);
  $$result.css.add(css$1);
  $$unsubscribe_Events();
  return `<section data-aos="${"fade-down"}" class="${"events my-20 bg-white rounded-[50px]"}"><div class="${"events-head w-[90vw] mx-auto flex flex-col md:flex-row justify-between items-center p-4"}"><h1 data-aos="${"fade-up"}" data-aos-anchor-placement="${"top-center"}" class="${"md:text-6xl text-3xl 2xs:text-4xl font-black md:basis-3/4 text-gray-800 md:m-4 md:ml-6"}">Catherine Events
		</h1>
		<div data-aos="${"fade-up"}" data-aos-anchor-placement="${"top-center"}" class="${"flex md:basis-1/4 scale-[0.7] md:scale-[1] justify-end md:mr-20"}"><div class="${"arrow-left cursor-pointer rotate-0 md:ml-6"}"><svg width="${"50pt"}" height="${"50pt"}" viewBox="${"0 0 100.000000 100.000000"}" preserveAspectRatio="${"xMidYMid meet"}"><g transform="${"translate(0.000000,100.000000) scale(0.100000,-0.100000)"}" fill="${"rgb(66, 66, 66)"}" stroke="${"none"}"><path d="${"M386 944 c-225 -54 -376 -286 -338 -517 62 -367 512 -513 773 -252\r\n                    329 330 18 879 -435 769z m219 -39 c312 -81 418 -473 191 -701 -241 -240 -651\r\n                    -107 -709 230 -50 295 226 546 518 471z"}"></path><path d="${"M325 590 l-90 -90 92 -92 c73 -73 95 -90 105 -80 10 10 -2 27 -57 82\r\n                    l-69 70 224 2 c192 3 225 5 225 18 0 13 -33 15 -225 18 l-224 2 68 69 c59 60\r\n                    76 91 48 91 -4 0 -48 -41 -97 -90z"}"></path></g></svg></div>
			<div class="${"arrow-right cursor-pointer rotate-180 md:ml-6"}"><svg width="${"50pt"}" height="${"50pt"}" viewBox="${"0 0 100.000000 100.000000"}" preserveAspectRatio="${"xMidYMid meet"}"><g transform="${"translate(0.000000,100.000000) scale(0.100000,-0.100000)"}" fill="${"rgb(66, 66, 66)"}" stroke="${"none"}"><path d="${"M386 944 c-225 -54 -376 -286 -338 -517 62 -367 512 -513 773 -252\r\n                    329 330 18 879 -435 769z m219 -39 c312 -81 418 -473 191 -701 -241 -240 -651\r\n                    -107 -709 230 -50 295 226 546 518 471z"}"></path><path d="${"M325 590 l-90 -90 92 -92 c73 -73 95 -90 105 -80 10 10 -2 27 -57 82\r\n                    l-69 70 224 2 c192 3 225 5 225 18 0 13 -33 15 -225 18 l-224 2 68 69 c59 60\r\n                    76 91 48 91 -4 0 -48 -41 -97 -90z"}"></path></g></svg></div></div></div>

	<div class="${"events-container rounded-b-[2.5rem] shadow-lg md:px-4 py-4 pr-8 flex flex-nowrap overflow-x-auto bg-white h-[600px]  svelte-uysmup"}"><div class="${"hidden md:block w-[100px] p-2 relative mx-4 "}" id="${"none"}"></div>
		${each($Events, (event, i) => {
    return `<div class="${"card w-[350px] p-2 relative mx-4  svelte-uysmup"}"${add_attribute("id", `card-${i}`, 0)}><div class="${"cards-grad absolute z-0"}"><div id="${"grad-1"}" class="${"w-[300px] z-0 absolute top-[-10px] left-[12.5px] rounded-3xl opacity-0 h-[100px] bg-gradient-to-r from-cyan-500 to-blue-500  svelte-uysmup"}"></div>
					<div id="${"grad-2"}" class="${"w-[270px] -z-10 absolute top-[-20px] left-[30px] rounded-3xl opacity-0 h-[100px] bg-gradient-to-r from-purple-500 to-pink-500  svelte-uysmup"}"></div></div>
				<div class="${"card-image-parent rounded-t-3xl relative z-10 overflow-hidden h-[300px] mb-[-120px]"}"><img alt="${"event-image"}" class="${"rounded-t-3xl pointer-events-none card-image-child h-[100%] w-[100%] object-cover object-center  svelte-uysmup"}"${add_attribute("src", `${event.image}`, 0)}></div>
				<div class="${"card-content h-[350px] grid items-center relative z-20 bg-white rounded-3xl p-6  svelte-uysmup"}"><h6 class="${"content-date text-base font-semibold text-gray-500"}">${escape(event.date)}</h6>
					<h1 class="${"content-head text-2xl font-bold text-gray-800 "}">${escape(event.name)}</h1>
					<p class="${"content-description font-medium text-justify text-gray-600 "}">${escape(event.description)}</p>
					<div class="${"content-view text-right pr-2 opacity-0 font-semibold text-gray-400 svelte-uysmup"}">More...</div></div>
			</div>`;
  })}</div>
</section>`;
});
const highlights_svelte_svelte_type_style_lang = "";
const css = {
  code: ".highlight.svelte-c0pa0p.svelte-c0pa0p{margin-top:20px}.highlight.svelte-c0pa0p .arrow-h svg.svelte-c0pa0p{fill:#000;width:24px;height:24px;transition:all 0.4s ease}.highlight.svelte-c0pa0p .arrow-h.svelte-c0pa0p{background:white;margin-top:9px;width:48px;height:48px;display:flex;align-items:center;justify-content:center;border-radius:50%;transition:background-color 0.4s ease, background 0.4s ease, color 0.4s ease;box-shadow:-1px -6px 10px hsl(0deg 0% 100% / 25%), 0 6px 10px rgb(5 25 122 / 10%)}.content-h.svelte-c0pa0p.svelte-c0pa0p{z-index:2;display:flex;flex-direction:column;align-items:center;justify-content:center}.highs.svelte-c0pa0p:hover .arrow-h.svelte-c0pa0p{background:black}.highs.svelte-c0pa0p:hover svg.svelte-c0pa0p{fill:white}",
  map: null
};
const Highlights = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section data-aos="${"fade-up"}" class="${"flex flex-col max-md:items-center my-20"}"><div class="${"events-head w-[90vw] mx-auto flex flex-col md:flex-row justify-between items-center p-4"}"><h1 class="${"md:text-6xl text-4xl 2xs:text-4xl font-black lg::basis-3/4 text-gray-800 md:m-4 md:ml-6"}">Our Highlights
		</h1>
		<div class="${"lg:flex hidden lg:basis-1/4 scale-[0.7] md:scale-[1] justify-end md:mr-20"}"><div class="${"arrow-left pointer-events-none opacity-0 rotate-0 md:ml-6"}"><svg width="${"50pt"}" height="${"50pt"}" viewBox="${"0 0 100.000000 100.000000"}" preserveAspectRatio="${"xMidYMid meet"}"><g transform="${"translate(0.000000,100.000000) scale(0.100000,-0.100000)"}" fill="${"rgb(66, 66, 66)"}" stroke="${"none"}"><path d="${"M386 944 c-225 -54 -376 -286 -338 -517 62 -367 512 -513 773 -252\r\n                    329 330 18 879 -435 769z m219 -39 c312 -81 418 -473 191 -701 -241 -240 -651\r\n                    -107 -709 230 -50 295 226 546 518 471z"}"></path><path d="${"M325 590 l-90 -90 92 -92 c73 -73 95 -90 105 -80 10 10 -2 27 -57 82\r\n                    l-69 70 224 2 c192 3 225 5 225 18 0 13 -33 15 -225 18 l-224 2 68 69 c59 60\r\n                    76 91 48 91 -4 0 -48 -41 -97 -90z"}"></path></g></svg></div>
			<div class="${"arrow-right pointer-events-none opacity-0 rotate-180 md:ml-6"}"><svg width="${"50pt"}" height="${"50pt"}" viewBox="${"0 0 100.000000 100.000000"}" preserveAspectRatio="${"xMidYMid meet"}"><g transform="${"translate(0.000000,100.000000) scale(0.100000,-0.100000)"}" fill="${"rgb(66, 66, 66)"}" stroke="${"none"}"><path d="${"M386 944 c-225 -54 -376 -286 -338 -517 62 -367 512 -513 773 -252\r\n                    329 330 18 879 -435 769z m219 -39 c312 -81 418 -473 191 -701 -241 -240 -651\r\n                    -107 -709 230 -50 295 226 546 518 471z"}"></path><path d="${"M325 590 l-90 -90 92 -92 c73 -73 95 -90 105 -80 10 10 -2 27 -57 82\r\n                    l-69 70 224 2 c192 3 225 5 225 18 0 13 -33 15 -225 18 l-224 2 68 69 c59 60\r\n                    76 91 48 91 -4 0 -48 -41 -97 -90z"}"></path></g></svg></div></div></div>
	<div class="${"highlights md:scale-[0.75] lg:scale-[1] lg:gap-2 gap-8 md:flex-row md:flex md:w-[100vw] w-[95vw] lg:w-[95vw] justify-evenly"}"><div class="${"highlight scale-[.8] md:scale-[1] w-[311px] mx-auto relative svelte-c0pa0p"}"><div class="${"highlight-bg1"}" data-aos="${"zoom-in"}" data-aos-anchor-placement="${"bottom-bottom"}" id="${"highlight-bg1"}"><svg class="${"mx-auto scale-0 svelte-c0pa0p"}" id="${"svg1"}" data-name="${"Layer 1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" viewBox="${"0 0 269 258"}" width="${"269"}" height="${"258"}" role="${"img"}"><defs><style>.acb2ec8b-8a46-4592-b6d1-c6a4b28d1be4 {
								fill-opacity: 0.85;
								fill: url(#add77119-e861-4ef0-87bc-5a45a27fa18e);
							}

							.f574b5c2-11fa-4c57-8d31-f76b9abf5680 {
								fill-opacity: 0.9;
								fill: url(#b8b47d88-c688-436c-bc48-81eb1ba46f34);
							}

							.b535b87f-b7cd-4d21-8133-b709b021cf33 {
								fill: url(#e30480d6-ec9d-403c-a112-d231046411d3);
							}</style><radialGradient id="${"add77119-e861-4ef0-87bc-5a45a27fa18e"}" cx="${"-813.69"}" cy="${"682.8"}" r="${"1"}" gradientTransform="${"matrix(119.53, -203.26, -242.99, -142.88, 263271.54, -67619.23)"}" gradientUnits="${"userSpaceOnUse"}"><stop offset="${"0"}" stop-color="${"#fcacf1"}"></stop><stop offset="${"0.45"}" stop-color="${"#fcacf1"}"></stop><stop offset="${"0.74"}" stop-color="${"#fe9887"}"></stop><stop offset="${"1"}" stop-color="${"#ef4225"}"></stop></radialGradient><radialGradient id="${"b8b47d88-c688-436c-bc48-81eb1ba46f34"}" cx="${"-813.57"}" cy="${"681.33"}" r="${"1"}" gradientTransform="${"matrix(81.75, -140.07, -166.83, -97.36, 180213, -47382.16)"}" gradientUnits="${"userSpaceOnUse"}"><stop offset="${"0"}" stop-color="${"#7fdddd"}"></stop><stop offset="${"0.45"}" stop-color="${"#7fdddd"}"></stop><stop offset="${"0.74"}" stop-color="${"#33d2c9"}"></stop><stop offset="${"1"}" stop-color="${"#1aa9e8"}"></stop></radialGradient><radialGradient id="${"e30480d6-ec9d-403c-a112-d231046411d3"}" cx="${"-813.46"}" cy="${"680.39"}" r="${"1"}" gradientTransform="${"matrix(68.12, -115.85, -138.49, -81.44, 149833.55, -38560.75)"}" gradientUnits="${"userSpaceOnUse"}"><stop offset="${"0.45"}" stop-color="${"#ffd953"}"></stop><stop offset="${"0.74"}" stop-color="${"#fbab33"}"></stop><stop offset="${"1"}" stop-color="${"#ef8523"}"></stop></radialGradient></defs><circle cx="${"142.5"}" cy="${"96.5"}" r="${"96.5"}" class="${"acb2ec8b-8a46-4592-b6d1-c6a4b28d1be4"}"></circle><ellipse cx="${"66"}" cy="${"159.5"}" rx="${"66"}" ry="${"66.5"}" class="${"f574b5c2-11fa-4c57-8d31-f76b9abf5680"}"></ellipse><circle cx="${"214"}" cy="${"203"}" r="${"55"}" class="${"b535b87f-b7cd-4d21-8133-b709b021cf33"}"></circle></svg></div>

			<a href="${"/educators"}" id="${"high1"}" data-aos="${"fade-up"}" class="${"content-h absolute cursor-pointer highs top-[33%] left-[15%]  svelte-c0pa0p"}"><span class="${"text-5xl font-bold"}">Educators</span>
				<button class="${"arrow-h svelte-c0pa0p"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 25"}" role="${"img"}" class="${"svelte-c0pa0p"}"><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M16.961 18.085a.459.459 0 0 0 .023.68.545.545 0 0 0 .732-.02l5.648-5.592.333-.33-.333-.33-5.572-5.516a.545.545 0 0 0-.732-.02.459.459 0 0 0-.023.68l4.76 4.712H.713c-.276 0-.5.224-.498.5 0 .276.226.5.502.5h21.028l-4.784 4.736Z"}"></path></svg></button></a></div>
		<div class="${"highlight scale-[.8] md:scale-[1] w-[311px] mx-auto relative svelte-c0pa0p"}"><div class="${"highlight-bg2"}" data-aos="${"zoom-in"}" data-aos-anchor-placement="${"bottom-bottom"}" id="${"highlight-bg2"}"><svg class="${"mx-auto scale-0 svelte-c0pa0p"}" id="${"svg2"}" data-name="${"Layer 1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" viewBox="${"0 0 282.42 282.43"}" width="${"282"}" height="${"282"}" role="${"img"}"><defs><radialGradient id="${"fb5d315b-08cf-4901-8ade-0d822e6a6e70"}" cx="${"-804.98"}" cy="${"696.66"}" r="${"1"}" gradientTransform="${"matrix(222.86, 131.03, 156.64, -266.4, 70300.74, 291182.92)"}" gradientUnits="${"userSpaceOnUse"}"><stop offset="${"0"}" stop-color="${"#7fdddd"}"></stop><stop offset="${"0.45"}" stop-color="${"#7fdddd"}"></stop><stop offset="${"0.74"}" stop-color="${"#33d2c9"}"></stop><stop offset="${"1"}" stop-color="${"#1aa9e8"}"></stop></radialGradient><radialGradient id="${"b2cc80a4-2f7a-4644-b0ce-c70d4ada74b0"}" cx="${"-803.56"}" cy="${"669.34"}" r="${"1"}" gradientTransform="${"matrix(142.04, -71.96, -10.74, -21.19, 121325.86, -43387.14)"}" gradientUnits="${"userSpaceOnUse"}"><stop offset="${"0.45"}" stop-color="${"#ef8523"}"></stop><stop offset="${"0.74"}" stop-color="${"#fbab33"}"></stop><stop offset="${"1"}" stop-color="${"#ffd953"}"></stop></radialGradient></defs><rect x="${"47.29"}" y="${"52.12"}" width="${"211.6"}" height="${"211.58"}" rx="${"10"}" transform="${"translate(-72.62 192.68) rotate(-59.42)"}" style="${"fill-opacity:0.8999999761581421;fill:url(#fb5d315b-08cf-4901-8ade-0d822e6a6e70)"}"></rect><path d="${"M146,174.43h0a7,7,0,0,1-2.57,9.6L24.8,252.49a7,7,0,0,1-9.59-2.57h0a7,7,0,0,1,2.57-9.6l118.58-68.46A7,7,0,0,1,146,174.43Z"}" transform="${"translate(-11.89 -16.7)"}" style="${"fill:url(#b2cc80a4-2f7a-4644-b0ce-c70d4ada74b0)"}"></path></svg></div>
			<a href="${"/infra"}" data-aos="${"fade-up"}" data-aos-delay="${"200"}" id="${"high2"}" class="${"content-h absolute top-[33%] cursor-pointer highs left-[0%]  svelte-c0pa0p"}"><span class="${"text-5xl font-bold"}">Infrastructure</span>
				<button class="${"arrow-h svelte-c0pa0p"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 25"}" role="${"img"}" class="${"svelte-c0pa0p"}"><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M16.961 18.085a.459.459 0 0 0 .023.68.545.545 0 0 0 .732-.02l5.648-5.592.333-.33-.333-.33-5.572-5.516a.545.545 0 0 0-.732-.02.459.459 0 0 0-.023.68l4.76 4.712H.713c-.276 0-.5.224-.498.5 0 .276.226.5.502.5h21.028l-4.784 4.736Z"}"></path></svg></button></a></div>
		<div class="${"highlight scale-[.8] md:scale-[1] w-[311px] mx-auto relative svelte-c0pa0p"}"><div class="${"highlight-bg3"}" data-aos="${"zoom-in"}" data-aos-anchor-placement="${"bottom-bottom"}" id="${"highlight-bg3"}"><svg class="${"mx-auto scale-0 svelte-c0pa0p"}" id="${"svg3"}" data-name="${"Layer 1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" viewBox="${"0 0 311.01 267.37"}" width="${"311"}" height="${"267"}" role="${"img"}"><defs><style>.e6a19419-ca4e-4fc8-919d-c225b495789d {
								fill: url(#b3ab2035-4d74-4988-bfaf-023d653d93e3);
							}

							.ff645115-978f-4749-91b7-0655df25f0da {
								fill: url(#a472a647-94c4-48a3-a4ff-c546c6d0522e);
							}

							.f4cdc8fd-f942-49df-83d2-702a58c7e32f {
								fill: url(#e5d1713c-65a6-46d4-9d69-0c85940c7ca1);
							}</style><radialGradient id="${"b3ab2035-4d74-4988-bfaf-023d653d93e3"}" cx="${"-772.29"}" cy="${"718.51"}" r="${"1"}" gradientTransform="${"matrix(102.14, -111.82, -133.67, -122.1, 175142, 1510.77)"}" gradientUnits="${"userSpaceOnUse"}"><stop offset="${"0"}" stop-color="${"#7fdddd"}"></stop><stop offset="${"0.45"}" stop-color="${"#7fdddd"}"></stop><stop offset="${"0.74"}" stop-color="${"#33d2c9"}"></stop><stop offset="${"1"}" stop-color="${"#1aa9e8"}"></stop></radialGradient><radialGradient id="${"a472a647-94c4-48a3-a4ff-c546c6d0522e"}" cx="${"-774.36"}" cy="${"721.07"}" r="${"1"}" gradientTransform="${"matrix(100.19, -350.44, -418.92, -119.77, 379827.03, -184632.73)"}" gradientUnits="${"userSpaceOnUse"}"><stop offset="${"0.45"}" stop-color="${"#ffd953"}"></stop><stop offset="${"0.74"}" stop-color="${"#fbab33"}"></stop><stop offset="${"1"}" stop-color="${"#ef8523"}"></stop></radialGradient><radialGradient id="${"e5d1713c-65a6-46d4-9d69-0c85940c7ca1"}" cx="${"-770.54"}" cy="${"719.06"}" r="${"1"}" gradientTransform="${"matrix(125.74, 73.93, 88.38, -150.31, 33358.79, 165213.36)"}" gradientUnits="${"userSpaceOnUse"}"><stop offset="${"0"}" stop-color="${"#fcacf1"}"></stop><stop offset="${"0.45"}" stop-color="${"#fcacf1"}"></stop><stop offset="${"0.74"}" stop-color="${"#fe9887"}"></stop><stop offset="${"1"}" stop-color="${"#ef4225"}"></stop></radialGradient></defs><path d="${"M262.1,15.8a10,10,0,0,1,11.5,2.43l39.07,43.31a10,10,0,0,1,1.23,11.69l-29.12,50.54a10,10,0,0,1-10.73,4.79L217,116.49a10,10,0,0,1-7.87-8.74l-6.15-58a10,10,0,0,1,5.87-10.18Z"}" transform="${"translate(-11.22 -14.93)"}" class="${"e6a19419-ca4e-4fc8-919d-c225b495789d"}"></path><path d="${"M145.78,54a10,10,0,0,1,16.77-4.34L319.36,209.26A10,10,0,0,1,314.73,226L98.14,282A10,10,0,0,1,86,269.62Z"}" transform="${"translate(-11.22 -14.93)"}" class="${"ff645115-978f-4749-91b7-0655df25f0da"}"></path><rect x="${"29.59"}" y="${"126.31"}" width="${"119.39"}" height="${"119.38"}" rx="${"10"}" transform="${"translate(-127.49 153.31) rotate(-59.42)"}" class="${"f4cdc8fd-f942-49df-83d2-702a58c7e32f"}"></rect></svg></div>
			<a href="${"/curriculum"}" data-aos="${"fade-up"}" data-aos-delay="${"400"}" id="${"high3"}" class="${"content-h absolute top-[33%] cursor-pointer highs left-[15%]  svelte-c0pa0p"}"><span class="${"text-5xl font-bold"}">Curriculum</span>
				<button class="${"arrow-h svelte-c0pa0p"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 25"}" role="${"img"}" class="${"svelte-c0pa0p"}"><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M16.961 18.085a.459.459 0 0 0 .023.68.545.545 0 0 0 .732-.02l5.648-5.592.333-.33-.333-.33-5.572-5.516a.545.545 0 0 0-.732-.02.459.459 0 0 0-.023.68l4.76 4.712H.713c-.276 0-.5.224-.498.5 0 .276.226.5.502.5h21.028l-4.784 4.736Z"}"></path></svg></button></a></div></div>
</section>`;
});
const Gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"overflow-hidden text-gray-700"}"><div class="${"gallery-head w-[90vw] mx-auto flex flex-col md:flex-row justify-between items-center p-4"}"><h1 class="${"md:text-6xl text-4xl 2xs:text-4xl font-black lg::basis-3/4 text-gray-800 md:m-4 md:ml-6"}">Gallery
		</h1>
		<div class="${"lg:flex hidden lg:basis-1/4 scale-[0.7] md:scale-[1] justify-end md:mr-20"}"><div class="${"arrow-left pointer-events-none opacity-0 rotate-0 md:ml-6"}"><svg width="${"50pt"}" height="${"50pt"}" viewBox="${"0 0 100.000000 100.000000"}" preserveAspectRatio="${"xMidYMid meet"}"><g transform="${"translate(0.000000,100.000000) scale(0.100000,-0.100000)"}" fill="${"rgb(66, 66, 66)"}" stroke="${"none"}"><path d="${"M386 944 c-225 -54 -376 -286 -338 -517 62 -367 512 -513 773 -252\r\n                    329 330 18 879 -435 769z m219 -39 c312 -81 418 -473 191 -701 -241 -240 -651\r\n                    -107 -709 230 -50 295 226 546 518 471z"}"></path><path d="${"M325 590 l-90 -90 92 -92 c73 -73 95 -90 105 -80 10 10 -2 27 -57 82\r\n                    l-69 70 224 2 c192 3 225 5 225 18 0 13 -33 15 -225 18 l-224 2 68 69 c59 60\r\n                    76 91 48 91 -4 0 -48 -41 -97 -90z"}"></path></g></svg></div>
			<div class="${"arrow-right pointer-events-none opacity-0 rotate-180 md:ml-6"}"><svg width="${"50pt"}" height="${"50pt"}" viewBox="${"0 0 100.000000 100.000000"}" preserveAspectRatio="${"xMidYMid meet"}"><g transform="${"translate(0.000000,100.000000) scale(0.100000,-0.100000)"}" fill="${"rgb(66, 66, 66)"}" stroke="${"none"}"><path d="${"M386 944 c-225 -54 -376 -286 -338 -517 62 -367 512 -513 773 -252\r\n                    329 330 18 879 -435 769z m219 -39 c312 -81 418 -473 191 -701 -241 -240 -651\r\n                    -107 -709 230 -50 295 226 546 518 471z"}"></path><path d="${"M325 590 l-90 -90 92 -92 c73 -73 95 -90 105 -80 10 10 -2 27 -57 82\r\n                    l-69 70 224 2 c192 3 225 5 225 18 0 13 -33 15 -225 18 l-224 2 68 69 c59 60\r\n                    76 91 48 91 -4 0 -48 -41 -97 -90z"}"></path></g></svg></div></div></div>
  <div class="${"container px-5 py-2 mx-auto lg:pt-4 lg:px-32"}"><div class="${"flex flex-col md:flex-row md:flex-wrap -m-1 md:-m-2"}"><div class="${"flex flex-wrap md:w-1/2"}"><div class="${"w-1/2 p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear"}"><img alt="${"gallery"}" class="${"block img-home object-cover object-center w-full h-full rounded-lg"}" src="${"./gallery/img (1).jpeg"}"></div>
        <div class="${"w-1/2 p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear"}"><img alt="${"gallery"}" class="${"block img-home object-cover object-center w-full h-full rounded-lg"}" src="${"./gallery/img (2).jpeg"}"></div>
        <div class="${"w-full p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear"}"><img alt="${"gallery"}" class="${"block img-home object-cover object-center w-full h-full rounded-lg"}" src="${"./gallery/img (3).jpeg"}"></div></div>
      <div class="${"flex flex-wrap md:w-1/2"}"><div class="${"w-full p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear"}"><img alt="${"gallery"}" class="${"block img-home object-cover object-center w-full h-full rounded-lg"}" src="${"./gallery/img (5).jpeg"}"></div>
        <div class="${"w-1/2 p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear"}"><img alt="${"gallery"}" class="${"block img-home object-cover object-center w-full h-full rounded-lg"}" src="${"./gallery/img (6).jpeg"}"></div>
        <div class="${"w-1/2 p-1 md:p-2 hover:brightness-[.7] cursor-pointer transition-all ease-linear"}"><img alt="${"gallery"}" class="${"block img-home object-cover object-center w-full h-full rounded-lg"}" src="${"./gallery/img (4).jpeg"}"></div></div></div>
    <a href="${"#/"}" class="${"text-right float-right text-xl font-semibold mt-4 p-4s hover:underline"}">More gallery...</a></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log("rendered");
  return `<section class="${""}"><div class="${""}">
    ${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
    ${validate_component(Why, "Why").$$render($$result, {}, {}, {})}
    ${validate_component(Highlights, "Highlights").$$render($$result, {}, {}, {})}
    ${validate_component(Gallery, "Gallery").$$render($$result, {}, {}, {})}
    ${validate_component(Cards, "Cards").$$render($$result, {}, {}, {})}
    
    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></section>`;
});
export {
  Page as default
};
