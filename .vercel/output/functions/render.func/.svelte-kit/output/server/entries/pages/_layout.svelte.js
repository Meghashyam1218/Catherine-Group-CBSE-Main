import { c as create_ssr_component } from "../../chunks/index.js";
import "aos";
const aos = "";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log("layout");
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
