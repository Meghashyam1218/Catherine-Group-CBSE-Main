import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { T as Top } from "../../../chunks/top.js";
import { F as Footer } from "../../../chunks/footer.js";
const Labs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"h-full my-10"}"><div class="${"lg:max-w-[1100px] xl:max-w-[80vw] flex ml-auto mr-auto flex-col-reverse lg:flex-row text-justify items-center justify-center"}"><div data-aos="${"fade-up"}" data-aos-once="${"true"}" class="${"basis-1/2 text-neutral-800 flex flex-col justify-center p-4 m-4"}"><h1 class="${"text-3xl font-semibold text-center md:text-start "}">Laboratory</h1>
        <br>
        <p class="${"md:text-xl text-base"}">Our school has well equipped <b>Laboratory</b>. All the labs are well furnished with good infrastructure &amp; modern facilities.
        </p>
        <br>
        <p class="${"md:text-xl text-base"}">A laboratory is a place where experiments and other hands-on activities are conducted in a controlled environment. Laboratories are commonly found in schools, where they are used by students to learn about scientific concepts and principles. In a school setting, a laboratory may be equipped with a variety of equipment and materials, such as beakers, test tubes, microscopes, and chemicals, that students can use to conduct experiments and observations.
        </p>
        <br>
        <p class="${"md:text-xl text-base"}">Laboratory activities typically involve following a set of procedures, collecting and analyzing data, and drawing conclusions based on the results of the experiments. The goal of a laboratory is to provide students with a hands-on learning experience that helps them better understand scientific concepts\xA0and\xA0principles.        </p></div>
    <div data-aos="${"zoom-in"}" data-aos-once="${"true"}" class="${"basis-1/2 p-4 m-4 md:max-w-[600px] "}"><img src="${"/lab.jpg"}" alt="${""}" class="${"rounded-[25%] sticky "}"></div></div></section>`;
});
const Classroom = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"h-full "}"><div class="${"lg:max-w-[1100px] xl:max-w-[80vw] flex ml-auto mr-auto flex-col lg:flex-row text-justify items-center justify-center"}"><div data-aos="${"zoom-in"}" data-aos-once="${"true"}" class="${"basis-1/2 p-4 m-4 md:max-w-[600px] "}"><img src="${"/aboutus.webp"}" alt="${""}" class="${"rounded-[25%] sticky "}"></div>
        <div data-aos="${"fade-up"}" data-aos-once="${"true"}" class="${"basis-1/2 text-neutral-800 flex flex-col justify-center p-4 m-4"}"><h1 class="${"text-3xl font-semibold text-center md:text-start "}">E-Classrooms</h1>
           <br>
           <p class="${"md:text-xl text-base"}">Catherine is equipped with E-Classroom</p>
           <br>
           <p class="${"md:text-xl text-base"}">A E-Classroom is a type of educational environment that uses technology to enhance the learning experience. This can include things like interactive whiteboards, computers, and other devices that allow students and teachers to access and share digital resources.  </p>
           <br>
           <p class="${"md:text-xl text-base"}">E-Classroom often have advanced networking capabilities, allowing for easy collaboration and communication between students and teachers, as well as remote access to educational materials. Overall, the goal of a smart classroom is to provide a more engaging and interactive learning environment that can improve student\xA0outcomes.       </p></div></div></section>`;
});
const Playground = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"h-full my-10"}"><div class="${"lg:max-w-[1100px] xl:max-w-[80vw] flex ml-auto mr-auto flex-col-reverse lg:flex-row text-justify items-center justify-center"}"><div data-aos="${"fade-up"}" data-aos-once="${"true"}" class="${"basis-1/2 text-neutral-800 flex flex-col justify-center p-4 m-4"}"><h1 class="${"text-3xl font-semibold text-center md:text-start "}">Playground</h1>
        <br>
        <p class="${"md:text-xl text-base"}">Catherine emphasizes on sports as well. The College strongly believes that besides gaining knowledge it is also important to take care of the physical health to ensure a sound mind and body. The students at BITS regularly participate in inter-collegiate tournaments in various sports and games events both within the campus and outside as well winning several prizes.
        </p>
        <br>
        <p class="${"md:text-xl text-base"}">Catherine has well equipped Basketball Hard Courts, Cricket Ground, Volley Ball Courts, Indoor Badminton Courts, Table Tennis Tables (Indoor) &amp;\xA0other\xA0ones\xA0too. </p>
        <br></div>
    <div data-aos="${"zoom-in"}" data-aos-once="${"true"}" class="${"basis-1/2 p-4 m-4 md:max-w-[600px] "}"><img src="${"/playground.jpg"}" alt="${""}" class="${"rounded-[25%] sticky "}"></div></div></section>`;
});
const Library = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"h-full "}"><div class="${"lg:max-w-[1100px] xl:max-w-[80vw] flex ml-auto mr-auto flex-col lg:flex-row text-justify items-center justify-center"}"><div data-aos="${"zoom-in"}" data-aos-once="${"true"}" class="${"basis-1/2 p-4 m-4 md:max-w-[600px] "}"><img src="${"/library.jpg"}" alt="${""}" class="${"rounded-[25%] sticky "}"></div>
        <div data-aos="${"fade-up"}" data-aos-once="${"true"}" class="${"basis-1/2 text-neutral-800 flex flex-col justify-center p-4 m-4"}"><h1 class="${"text-3xl font-semibold text-center md:text-start "}">Library</h1>
           <br>
           <p class="${"md:text-xl text-base"}">Catherine is equipped with well managed library ,which have a collection of books and other materials that are specifically chosen to support the curriculum and the educational needs of the students. <br>
           <br>
           </p><p class="${"md:text-xl text-base"}">They may also offer other resources and services, such as access to computers and other technology, programs and events, and reference assistance. A school library is an important part of a school&#39;s learning environment, and it can play a crucial role in supporting the academic success\xA0of\xA0students. </p></div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Top, "Top").$$render(
    $$result,
    {
      name: "Infrastructure",
      heading: "Infrastructure",
      bgImage: "./top-1.jpg"
    },
    {},
    {}
  )}
${validate_component(Classroom, "Classroom").$$render($$result, {}, {}, {})}
${validate_component(Labs, "Labs").$$render($$result, {}, {}, {})}
${validate_component(Library, "Library").$$render($$result, {}, {}, {})}
${validate_component(Playground, "Playground").$$render($$result, {}, {}, {})}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
