import componentStatusTemplate from "./component-status.md";
import contributingTemplate from "../../CONTRIBUTING.md";
import introductionTemplate from "../../README.md";

export default function ($stateProvider) {
    "ngInject";

    $stateProvider
        .state("showcase.documentation", {
            url: "/documentation",
            friendlyName: "Documentation",
            groupName: "Getting started",
            redirectTo: "showcase.documentation.introduction",
            template: "<ui-view></ui-view>",
            weight: 9000
        })
        .state("showcase.documentation.introduction", {
            url: "/introduction",
            friendlyName: "Introduction",
            template: introductionTemplate
        })
        .state("showcase.documentation.contributing", {
            url: "/contributing",
            friendlyName: "Contributing",
            template: contributingTemplate
        })
        .state("showcase.documentation.component-status", {
            url: "/component-status",
            friendlyName: "Component status",
            template: componentStatusTemplate
        });
}
