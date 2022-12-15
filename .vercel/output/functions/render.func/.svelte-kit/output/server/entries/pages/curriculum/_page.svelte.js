import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { T as Top } from "../../../chunks/top.js";
import { F as Footer } from "../../../chunks/footer.js";
const Curriculum = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"h-full my-10"}"><div class="${"lg:max-w-[1100px] xl:max-w-[80vw] flex ml-auto mr-auto flex-col-reverse lg:flex-row text-justify items-center justify-center"}"><div data-aos="${"fade-up"}" data-aos-once="${"true"}" class="${"basis-1/2 text-neutral-800 flex flex-col justify-center p-4 m-4"}"><h1 class="${"text-3xl font-semibold text-center md:text-start "}">CBSE</h1>
        <br>
        <p class="${"md:text-xl text-base"}">In Catherine we strictly follow CBSE curriculum. </p>
        <br>
        <p class="${"md:text-xl text-base"}">The CBSE (Central Board of Secondary Education) is a national level board of education in India. The CBSE curriculum is designed to provide students with a well-rounded education that includes a mix of academic subjects, practical skills, and co-curricular activities. The CBSE curriculum covers a range of subjects, including languages, science, math, social studies, and information and communication technology.
        </p>
        <br>
        <p class="${"md:text-xl text-base"}">It also includes physical education and health education, as well as opportunities for students to engage in extracurricular activities such as sports and music. The goal of the CBSE curriculum is to provide students with the knowledge and skills they need to succeed in higher education and in their\xA0future\xA0careers.      </p></div>
    <div data-aos="${"zoom-in"}" data-aos-once="${"true"}" class="${"basis-1/2 p-4 m-4 md:max-w-[600px] "}"><img src="${"/cbse.jpg"}" alt="${""}" class="${"rounded-[25%] sticky "}"></div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Top, "Top").$$render(
    $$result,
    {
      name: "Curriculum",
      heading: "Curriculum",
      bgImage: "./top-2.jpg"
    },
    {},
    {}
  )}

${validate_component(Curriculum, "Curriculum").$$render($$result, {}, {}, {})}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
