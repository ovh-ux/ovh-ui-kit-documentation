import changelogTemplate from "ovh-ui-kit/CHANGELOG.md";
import config from "./ovh-ui-kit.config.json";
import contributingTemplate from "ovh-ui-kit/CONTRIBUTING.md";
import introductionTemplate from "ovh-ui-kit/README.md";
import templateUtils from "../utils/template-utils";

const templates = templateUtils.loadLessReadme();

export default function ($stateProvider) {
    "ngInject";

    $stateProvider
        .state("showcase.ovh-ui-kit", {
            url: "/ovh-ui-kit",
            friendlyName: "Styles",
            groupName: "Getting started",
            redirectTo: "showcase.ovh-ui-kit.introduction",
            template: "<div ui-view></div>",
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
        });

    templateUtils.addLessComponentStates($stateProvider, templates, config);
}
