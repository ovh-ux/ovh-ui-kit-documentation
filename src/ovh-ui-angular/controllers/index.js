import criteriaAdderController from "./criteria-adder.controller";
import datagridController from "./datagrid.controller";
import fieldController from "./field.controller";
import navbarController from "./navbar.controller";
import paginationController from "./pagination.controller";
import searchController from "./search.controller";
import selectController from "./select.controller";
import showCurrentValueInPopupController from "./show-current-value-in-popup.controller";

angular.module("ovh-ui-kit-documentation")
    .controller("CriteriaAdderCtrl", criteriaAdderController)
    .controller("DatagridCtrl", datagridController)
    .controller("FieldCtrl", fieldController)
    .controller("NavbarCtrl", navbarController)
    .controller("PaginationCtrl", paginationController)
    .controller("ShowCurrentValueInPopupCtrl", showCurrentValueInPopupController)
    .controller("SearchCtrl", searchController)
    .controller("SelectCtrl", selectController);
