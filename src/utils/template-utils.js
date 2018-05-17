import _ from "lodash";

class TemplateUtils {
    static loadLessReadme () {
        const req = requireLess();
        return loadAll(req);
    }

    static loadAngularJSReadme () {
        const req = requireAngularJS();
        return loadAll(req);
    }

    static addLessComponentStates ($stateProvider, templates, config) {
        Object.keys(templates).forEach(templateName => {
            const templateConfig = {
                url: `/${templateName}`,
                friendlyName: _.capitalize(templateName),
                ...config[templateName]
            };

            // Create showcase route
            $stateProvider.state(`showcase.ovh-ui-kit.${templateName}`, {
                ...templateConfig,
                template: templates[templateName].template
            });

            // Create isolated component route
            $stateProvider.state(`isolated-ovh-ui-kit.${templateName}`, {
                ...templateConfig,
                template: templates[templateName].preview
            });
        });
    }

    static addAngularJSComponentStates ($stateProvider, templates, config) {
        Object.keys(templates).forEach(templateName => {
            const templateConfig = {
                url: `/${templateName}`,
                friendlyName: _.capitalize(templateName),
                ...config[templateName]
            };

            if (templateConfig.controller) {
                templateConfig.controllerAs = "$ctrl";
            }

            // Create showcase route
            $stateProvider.state(`showcase.oui-angular.${templateName}`, {
                ...templateConfig,
                template: templates[templateName]
            });
            if (templateConfig.childRouts) {
                Object.keys(templateConfig.childRouts).forEach(route => {
                    const childRouteConfig = {
                        url: `/${route}`,
                        friendlyName: _.capitalize(route),
                        ...config[route]
                    };
                    $stateProvider.state(`showcase.oui-angular.${templateName}.${route}`, {
                        ...childRouteConfig,
                        template: route.template
                    });
                });
            }
        });
    }
}

function loadAll (req) {
    const templates = [];
    req.keys().forEach(readmeFile => {
        const matches = readmeFile.match(/oui-([^/]+)\//);
        if (matches && matches.length >= 2) {
            templates[matches[1]] = req(readmeFile);
        }
    });
    return templates;
}

function requireLess () {
    return require.context("!templatePreview-loader!ovh-ui-kit/packages", true, /^\.\/((?!node_modules).)*\/README\.md$/);
}

function requireAngularJS () {
    return require.context("ovh-ui-angular/packages", true, /^\.\/((?!node_modules).)*\/README\.md$/);
}

export default TemplateUtils;
