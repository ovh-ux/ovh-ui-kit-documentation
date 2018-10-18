export default function ($stateProvider) {
    "ngInject";

    $stateProvider
        .state("showcase", {
            redirectTo: "showcase.documentation",
            template: "<showcase-ui></showcase-ui>"
        })
        .state("root", {
            url: "",
            redirectTo: "showcase"
        });
}
