import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { T as Top } from "../../../chunks/top.js";
import { F as Footer } from "../../../chunks/footer.js";
const Aboutus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"h-full my-10"}"><div class="${"lg:max-w-[1100px] xl:max-w-[80vw] flex ml-auto mr-auto flex-col-reverse lg:flex-row text-justify items-center justify-center"}"><div data-aos="${"fade-up"}" data-aos-once="${"true"}" class="${"basis-1/2 text-neutral-800 flex flex-col justify-center p-4 m-4"}"><h1 class="${"text-3xl font-semibold text-center md:text-start "}">About Us</h1>
        <br>
        <p class="${"md:text-xl text-base"}">Catherine Schools was founded in 1983 by R.D.Ratna Raju and Lt. Prof (Mrs) Satya Bala. This Christian Minority Institution educates,nurtures and inspires girls and boys of diverse backgrounds to acheive their highest academic and creative potential, to embrase ethical values, and to become active cintributors to their communities.

        </p>
        <br>
        <p class="${"md:text-xl text-base"}">The founders both being retired professors have been serving the cause of education for more than 45 years. they dram from the rich exposure to education system in Europe, America and Asia and the amazing story of Catherine School, which has already established a legacy of academic excellence, is a story that continues unfold. 
        </p></div>
    <div data-aos="${"zoom-in"}" data-aos-once="${"true"}" class="${"basis-1/2 p-4 m-4 md:max-w-[600px] "}"><img src="${"/aboutus.png"}" alt="${""}" class="${"rounded-[25%] sticky "}"></div></div></section>`;
});
const Vision = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"h-full "}"><div class="${"lg:max-w-[1100px] xl:max-w-[80vw] flex ml-auto mr-auto flex-col lg:flex-row text-justify items-center justify-center"}"><div data-aos="${"zoom-in"}" data-aos-once="${"true"}" class="${"basis-1/2 p-4 m-4 md:max-w-[600px] "}"><img src="${"/vision .jpg"}" alt="${""}" class="${"rounded-[25%] sticky "}"></div>
       <div data-aos="${"fade-up"}" data-aos-once="${"true"}" class="${"basis-1/2 text-neutral-800 flex flex-col justify-center p-4 m-4"}"><h1 class="${"text-3xl font-semibold text-center md:text-start "}">Vision</h1>
           <br>
           <p class="${"md:text-xl text-base"}">We strive to prepare all students to become lifelong learners and responsible citizens ready to meet the challenges of the future.      </p>
           <br>
           <p class="${"md:text-xl text-base"}">In partnership with families and community, our goal is to create relevant learning opportunities for students \u2014 both inside and outside the classroom \u2014 that help them develop the knowledge, critical thinking skills, and character necessary to succeed in a technologically advanced world.
        </p></div></div></section>`;
});
const Values = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"h-full my-10 "}"><div class="${"lg:max-w-[1100px] xl:max-w-[80vw] flex ml-auto mr-auto flex-col-reverse lg:flex-row text-justify items-center justify-center"}"><div data-aos="${"fade-up"}" data-aos-once="${"true"}" class="${"basis-1/2 text-neutral-800 flex flex-col justify-center p-4 m-4"}"><h1 class="${"text-3xl font-semibold text-center md:text-start "}">Core Values</h1>
           <br>
           <p class="${"md:text-xl text-base"}">Catherine takes pride in itself as a community of learners in which intellectual curiosity and a lifelong love of learning are valued. Catherine strives to ground students with a strong moral purpose. Students are encouraged to make judgments based on ethical principles that honor the values of equity and justice; they learn the importance of kindness, caring, and support toward and for one another.   </p>
           <br>
           <p class="${"md:text-xl text-base"}">The school has four unique core values that were chosen with a concern for the overall development of each child and for the benefit of the society at large</p>
        <br>
            <p class="${"md:text-xl text-base text-left"}">THE FOUR <b>CORE VALUES</b> OF CATHERINE ARE

             <b class="${"px-1"}">ACADEMIC EXCELLENCE,</b>
             <b class="${"px-1"}">DISCIPLINE,</b>
             <b class="${"px-1"}">VALUE EDUCATION,</b>
             <b class="${"px-1"}">ACCOUNTABILITY.</b></p></div>
       <div data-aos="${"zoom-in"}" data-aos-once="${"true"}" class="${"basis-1/2 p-4 m-4 md:max-w-[600px] "}"><img src="${"/values.png"}" alt="${""}" class="${"rounded-[25%] sticky "}"></div></div></section>`;
});
const Managments = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"h-full "}"><div class="${"lg:max-w-[1100px] xl:max-w-[80vw] flex ml-auto mr-auto flex-col lg:flex-row text-justify items-center justify-center"}"><div data-aos="${"zoom-in"}" data-aos-once="${"true"}" class="${"basis-1/2 p-4 m-4 md:max-w-[600px] "}"><img src="${"/management.jpg"}" alt="${""}" class="${"rounded-[25%] sticky "}"></div>
        <div data-aos="${"fade-up"}" data-aos-once="${"true"}" class="${"basis-1/2 text-neutral-800 flex flex-col justify-center p-4 m-4"}"><h1 class="${"text-3xl font-semibold text-center md:text-start "}">Managamenet</h1>
           <br>
           <p class="${"md:text-xl text-base"}">Its Director Dr. Sushma Evangeline Rayi, MCA., M.Ed., PhD (Education), has rich exposure and experience in circular and cocurricular aspects in the field od education.
           </p>
           <br>
           <p class="${"md:text-xl text-base"}">Its Secratary &amp; Correspondent Mr. Oliver rayi, is an Education Technologist, Value Education Specialist, Lifeskills Expert and also holds a Masters in Business Adminisytration. He was awarded the Leadership Award for Education Excellence in 2014.He was instrumental in ushering in innovation in teaching menthods, His leadership ensures thatschools as an organization is actively ;listening, reflecting, and eveloving. Mr. Oliver Rayi ensured the provison of International School facilities at anormal school fee.  </p></div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Top, "Top").$$render(
    $$result,
    {
      name: "About us",
      heading: "About Us",
      bgImage: "./top-2.jpg"
    },
    {},
    {}
  )}

${validate_component(Aboutus, "Aboutus").$$render($$result, {}, {}, {})}
${validate_component(Vision, "Vision").$$render($$result, {}, {}, {})}
${validate_component(Values, "Values").$$render($$result, {}, {}, {})}
${validate_component(Managments, "Managments").$$render($$result, {}, {}, {})}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
