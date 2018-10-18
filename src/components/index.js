import ComponentStatus from "./component-status";
import rootRoutes from "./index.routes";
import Showcase from "./showcase";

export default angular
    .module("oui-doc.components", [
        "oui",
        "ui.router",
        ComponentStatus,
        Showcase
    ])
    .config(rootRoutes)
    .name;
