import datagridController from "../ovh-ui-angular/controllers/datagrid.controller";
import datagridLocalTemplate from "./datagrid-local.html";
import datagridRemoteTemplate from "./datagrid-remote.html";

export default function ($stateProvider) {
    "ngInject";

    $stateProvider
        .state("functional", {
            url: "/tests/functional",
            redirectTo: "functional.empty",
            template: "<ui-view></ui-view>"
        })
        .state("functional.empty", {
            url: "/empty",
            template: ""
        })
        .state("functional.datagrid-local-small", {
            url: "/datagrid/local/small",
            template: datagridLocalTemplate,
            controller: datagridController,
            controllerAs: "$ctrl",
            params: {
                initialPageSize: 25
            }
        })
        .state("functional.datagrid-local-large", {
            url: "/datagrid/local/large",
            template: datagridLocalTemplate,
            controller: datagridController,
            controllerAs: "$ctrl",
            params: {
                initialPageSize: 300
            }
        })
        .state("functional.datagrid-remote-small", {
            url: "/datagrid/remote/small",
            template: datagridRemoteTemplate,
            controller: datagridController,
            controllerAs: "$ctrl",
            params: {
                initialPageSize: 25
            }
        })
        .state("functional.datagrid-remote-large", {
            url: "/datagrid/remote/large",
            template: datagridRemoteTemplate,
            controller: datagridController,
            controllerAs: "$ctrl",
            params: {
                initialPageSize: 300
            }
        });
}
