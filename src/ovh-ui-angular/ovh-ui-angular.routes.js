import changelogTemplate from "ovh-ui-angular/CHANGELOG.md";
import config from "./ovh-ui-angular.config.json";
import contributingTemplate from "ovh-ui-angular/CONTRIBUTING.md";

// import decisionsTemplate from "./decisions.md";
import introductionTemplate from "ovh-ui-angular/README.md";
import templateUtils from "src/utils/template-utils";

const templates = templateUtils.loadAngularJSReadme();

export default function ($stateProvider) {
    "ngInject";

    $stateProvider
        .state("showcase.oui-angular", {
            url: "/oui-angular",
            friendlyName: "Components",
            groupName: "Getting started",
            redirectTo: "showcase.oui-angular.introduction",
            template: "<ui-view></ui-view>",
            weight: 9000,
            groups: {
                layout: {
                    name: "Layout",
                    weight: 9000
                },
                content: {
                    name: "Content",
                    weight: 8000
                },
                components: {
                    name: "Components",
                    weight: 7000
                },
                utilities: {
                    name: "Utilities",
                    weight: 6000
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
        });

    // .state("showcase.oui-angular.decisions", {
    //     url: "/decisions",
    //     friendlyName: "Decisions",
    //     template: decisionsTemplate
    // });

    templateUtils.addAngularJSComponentStates($stateProvider, templates, config);
}
