import datagridController from "./datagrid.controller";
import paginationController from "./pagination.controller";
import showCurrentValueInPopupController from "./show-current-value-in-popup.controller";

angular.module("ovh-ui-kit-documentation")
    .controller("DatagridCtrl", datagridController)
    .controller("PaginationCtrl", paginationController)
    .controller("ShowCurrentValueInPopupCtrl", showCurrentValueInPopupController);
