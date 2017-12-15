import paginationController from "./pagination.controller";
import showCurrentValueInPopupController from "./show-current-value-in-popup.controller";

angular.module("ovh-ui-kit-documentation")
    .controller("PaginationCtrl", paginationController)
    .controller("ShowCurrentValueInPopupCtrl", showCurrentValueInPopupController);
