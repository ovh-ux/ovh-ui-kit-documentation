import Showcase from "./showcase.component";
import ShowcaseService from "./showcase.service";

export default angular
    .module("oui-doc.components.showcase", [])
    .component("ouiShowcase", Showcase)
    .service("ShowcaseService", ShowcaseService)
    .name;
