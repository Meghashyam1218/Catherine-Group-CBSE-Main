import { c as create_ssr_component, d as each, f as add_attribute, e as escape, v as validate_component } from "../../../chunks/index.js";
import { T as Top } from "../../../chunks/top.js";
import { F as Footer } from "../../../chunks/footer.js";
const ListOfItems = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items = [
    {
      name: "Land Certificate",
      link: "/md/land_certificate.pdf"
    },
    { name: "Society", link: "/md/society.pdf" },
    { name: "NOC", link: "/md/noc.pdf" },
    {
      name: "Recognition",
      link: "/md/recognitio.pdf"
    },
    {
      name: "Building Safety",
      link: "/md/building_safety.pdf"
    },
    {
      name: "Fire Safety",
      link: "/md/fire.pdf"
    },
    {
      name: "Self Certificate",
      link: "/md/selfaffidavit.pdf"
    },
    {
      name: "Sanitation",
      link: "/md/sanitary.pdf"
    },
    {
      name: "Fee Structure",
      link: "/md/fee.pdf"
    },
    {
      name: "Academic Calendar",
      link: "/md/academiccalender.pdf"
    },
    { name: "SMC", link: "/md/smc.pdf" },
    { name: "PTA", link: "/md/pta.pdf" },
    { name: "Results", link: "#" },
    {
      name: "Staff List",
      link: "/md/staff_list.pdf"
    },
    {
      name: "Structural",
      link: "/md/structural.pdf"
    }
  ];
  return `<section><div class="${"md:w-[70%] md:mx-[auto]"}"><div class="${"m-3 md:mx-[auto] rounded-xl overflow-x-auto shadow-md sm:rounded-lg "}"><table class="${"rounded w-full text-sm text-left text-gray-400 justify-center"}"><tbody class="${"items-center"}">${each(items, (item, i) => {
    return `<tr${add_attribute(
      "class",
      `${i % 2 === 0 ? "bg-white gray-700" : "bg-gray-200 gray-700"} `,
      0
    )}><th scope="${"row"}" class="${"hidden sm:block py-4 px-6 font-medium mx-[auto] text-black whitespace-nowrap"}">${escape(i + 1)}.
                        </th>
                        <td class="${"py-2 xs:py-4 px-3 xs:px-6 text-black "}">${escape(item.name)}</td>
                        <td class="${"py-4 px-6 text-black"}"><a${add_attribute("href", `${item.link}`, 0)} class="${"font-medium hover:text-blue-500 hover:underline"}"><button class="${"rounded-lg px-2 xs:px-4 py-2 xs:py-2 text-xs xs:text-base bg-white hover:bg-gray-800 text-gray-800 hover:text-white transition-colors shadow-md"}">View
                                </button>
                            </a></td>
                        <td class="${"py-4 px-6 flex justify-center"}"><a${add_attribute("href", `${item.link}`, 0)} download class="${"font-medium text-black hover:text-blue-500 hover:underline"}"><button class="${"rounded-lg px-2 xs:px-4 py-2 xs:py-2 text-xs xs:text-base bg-gray-800 hover:bg-white hover:text-gray-800 text-white shadow-md transition-colors"}">Download
                                </button>
                            </a></td>
                    </tr>`;
  })}</tbody></table></div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Top, "Top").$$render(
    $$result,
    {
      name: "Mandatory Disclosure",
      heading: "Mandatory Disclosure",
      bgImage: "./top-1.jpg"
    },
    {},
    {}
  )}
${validate_component(ListOfItems, "ListOfItems").$$render($$result, {}, {}, {})}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
