import datagridController from "./datagrid.controller";
import navbarController from "./navbar.controller";
import paginationController from "./pagination.controller";
import selectController from "./select.controller";
import showCurrentValueInPopupController from "./show-current-value-in-popup.controller";

angular.module("ovh-ui-kit-documentation")
    .controller("DatagridCtrl", datagridController)
    .controller("NavbarCtrl", navbarController)
    .controller("PaginationCtrl", paginationController)
    .controller("ShowCurrentValueInPopupCtrl", showCurrentValueInPopupController)
    .controller("SelectCtrl", selectController);
