import "angular";
import "angular-aria";
import "angular-messages";
import "angular-sanitize";
import "@uirouter/angularjs";
import "ovh-documentation-toolkit";
import "ovh-ui-angular";

import "highlightjs/styles/vs.css";

import "./index.less";
import "./components";

import componentStatusConfig from "./init/component-status.config";
import DocumentationRoutes from "./documentation/documentation.routes";
import OvhUiAngularRoutes from "./ovh-ui-angular/ovh-ui-angular.routes";
import OvhUiKitRoutes from "./ovh-ui-kit/ovh-ui-kit.routes";

const app = angular
    .module("ovh-ui-kit-documentation", [
        "ngAria",
        "ngMessages",
        "ngSanitize",
        "ui.router",
        "ovh-documentation-toolkit",
        "oui",
        "ovh-ui-kit-documentation-components"
    ])
    .config(componentStatusConfig)
    .config(DocumentationRoutes)
    .config(OvhUiKitRoutes)
    .config(OvhUiAngularRoutes);

require("./ovh-ui-angular/controllers/index");

export default app;
