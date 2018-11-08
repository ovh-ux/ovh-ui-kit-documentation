export default function ($stateProvider) {
    "ngInject";

    $stateProvider
        .state("showcase", {
            redirectTo: "showcase.documentation",
            template: "<oui-showcase></oui-showcase>"
        })
        .state("root", {
            url: "",
            redirectTo: "showcase"
        });
}
