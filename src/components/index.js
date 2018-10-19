import ComponentStatus from "./component-status";
import Routes from "./index.routes";
import Showcase from "./showcase";

export default angular
    .module("app.components", [
        "oui",
        "ui.router",
        ComponentStatus,
        Showcase
    ])
    .config(Routes)
    .name;
