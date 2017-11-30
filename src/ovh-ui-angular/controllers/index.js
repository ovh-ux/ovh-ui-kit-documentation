import datagridController from "./datagrid.controller";
import showCurrentValueInPopopController from "./show-current-value-in-popup.controller";

angular.module("ovh-ui-kit-documentation")
    .config(ouiTableConfigurationProvider => {
        ouiTableConfigurationProvider.setCssConfig({
            tablePanel: "oui-table-panel",
            table: "oui-table oui-table_responsive",
            thead: "oui-table__headers",
            tbody: "oui-table__body",
            tr: "oui-table__row",
            th: "oui-table__header",
            td: "oui-table__cell",
            sortable: "oui-table__cell_sortable oui-table__cell_sortable-asc",
            sorted: "oui-table__cell_sorted",
            sortableAsc: "oui-table__cell_sortable-asc",
            sortableDesc: "oui-table__cell_sortable-desc",
            closed: "oui-table__row_closed",
            emptyTable: "oui-table-empty",
            thSelector: "oui-table__header_selector",
            tdSelector: "oui-table__cell_selector"
        });
    })
    .controller("DatagridCtrl", datagridController)
    .controller("ShowCurrentValueInPopupCtrl", showCurrentValueInPopopController);
