import changelogTemplate from "ovh-ui-angular/CHANGELOG.md";
import config from "./ovh-ui-angular.config.json";
import contributingTemplate from "ovh-ui-angular/CONTRIBUTING.md";
import decisionsTemplate from "./decisions.md";
import introductionTemplate from "ovh-ui-angular/README.md";
import templateUtils from "src/utils/template-utils";

const templates = templateUtils.loadAngularJSReadme();

export default function ($stateProvider) {
    "ngInject";

    $stateProvider
        .state("showcase.oui-angular", {
            url: "/oui-angular",
            friendlyName: "oui-angular",
            groupName: "oui-angular components",
            redirectTo: "showcase.oui-angular.introduction",
            template: "<ui-view></ui-view>",
            weight: 9000,
            groups: {
                basic: {
                    name: "Basic",
                    weight: 9000
                },
                form: {
                    name: "Form",
                    weight: 8000
                },
                data: {
                    name: "Data",
                    weight: 7000
                },
                notice: {
                    name: "Notice",
                    weight: 6000
                },
                nav: {
                    name: "Navigation",
                    weight: 5000
                },
                others: {
                    name: "Others",
                    weight: 1000
                },
                internal: {
                    name: "Internal",
                    weight: 500
                },
                legacy: {
                    name: "Legacy",
                    weight: 0
                }
            }
        })
        .state("showcase.oui-angular.introduction", {
            url: "/introduction",
            friendlyName: "Introduction",
            template: introductionTemplate
        })
        .state("showcase.oui-angular.contributing", {
            url: "/contributing",
            friendlyName: "Contributing",
            template: contributingTemplate
        })
        .state("showcase.oui-angular.changelog", {
            url: "/changelog",
            friendlyName: "Changelog",
            template: changelogTemplate
        })
        .state("showcase.oui-angular.decisions", {
            url: "/decisions",
            friendlyName: "Decisions",
            template: decisionsTemplate
        });

    templateUtils.addAngularJSComponentStates($stateProvider, templates, config);
}
