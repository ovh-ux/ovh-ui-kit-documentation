import calendarController from "./calendar.controller";
import chipsController from "./chips.controller";
import criteriaAdderController from "./criteria-adder.controller";
import datagridController from "./datagrid.controller";
import fieldController from "./field.controller";
import navbarController from "./navbar.controller";
import paginationController from "./pagination.controller";
import progressController from "./progress.controller";
import searchController from "./search.controller";
import selectController from "./select.controller";
import showCurrentValueInPopupController from "./show-current-value-in-popup.controller";
import stepperController from "./stepper.controller";

angular.module("app")
    .controller("CalendarCtrl", calendarController)
    .controller("CriteriaAdderCtrl", criteriaAdderController)
    .controller("ChipsCtrl", chipsController)
    .controller("DatagridCtrl", datagridController)
    .controller("FieldCtrl", fieldController)
    .controller("NavbarCtrl", navbarController)
    .controller("PaginationCtrl", paginationController)
    .controller("ProgressCtrl", progressController)
    .controller("ShowCurrentValueInPopupCtrl", showCurrentValueInPopupController)
    .controller("SearchCtrl", searchController)
    .controller("SelectCtrl", selectController)
    .controller("StepperCtrl", stepperController);
