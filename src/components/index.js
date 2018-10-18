import ComponentStatus from "./component-status/component-status.component";
import ComponentStatusProvider from "./component-status/component-status.provider";
import IndeterminateDirective from "./indeterminate.directive";
import redirectToInit from "./init/redirectTo.run";
import rootRoutes from "./index.routes";
import Showcase from "./showcase/showcase.component";
import StateHelpers from "./state-helpers/state-helpers.service";

export default angular
    .module("ovh-ui-kit-documentation-components", [
        "oui", "ui.router"
    ])
    .component("componentStatus", ComponentStatus)
    .component("showcaseUi", Showcase)
    .directive("indeterminate", IndeterminateDirective)
    .provider("ComponentStatus", ComponentStatusProvider)
    .service("StateHelpers", StateHelpers)
    .config(rootRoutes)
    .run(redirectToInit)
    .name;
