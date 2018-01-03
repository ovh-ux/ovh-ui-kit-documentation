import changelogTemplate from "ovh-ui-kit/CHANGELOG.md";
import config from "./ovh-ui-kit.config.json";
import contributingTemplate from "ovh-ui-kit/CONTRIBUTING.md";
import introductionTemplate from "ovh-ui-kit/README.md";
import templateUtils from "src/utils/template-utils";

const templates = templateUtils.loadLessReadme();

export default function ($stateProvider) {
    "ngInject";

    $stateProvider
        .state("showcase.ovh-ui-kit", {
            url: "/ovh-ui-kit",
            friendlyName: "ovh-ui-kit",
            groupName: "ovh-ui-kit components",
            redirectTo: "showcase.ovh-ui-kit.introduction",
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
                    weight: 0
                }
            }
        })
        .state("showcase.ovh-ui-kit.introduction", {
            url: "/introduction",
            friendlyName: "Introduction",
            template: introductionTemplate
        })
        .state("showcase.ovh-ui-kit.contributing", {
            url: "/contributing",
            friendlyName: "Contributing",
            template: contributingTemplate
        })
        .state("showcase.ovh-ui-kit.changelog", {
            url: "/changelog",
            friendlyName: "Changelog",
            template: changelogTemplate
        })

        // Isolated routes
        .state("isolated-ovh-ui-kit", {
            url: "/isolated-ovh-ui-kit",
            template: "<ui-view></ui-view>"
        });

    templateUtils.addLessComponentStates($stateProvider, templates, config);
}
