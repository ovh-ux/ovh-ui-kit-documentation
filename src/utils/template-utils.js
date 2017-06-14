import _ from 'lodash'

class TemplateUtils {
  static loadLessReadme () {
    const req = requireLess()
    return loadAll(req)
  }

  static addComponentStates ($stateProvider, templates, config) {
    Object.keys(templates).forEach(templateName => {
      const templateConfig = {
        url: `/${templateName}`,
        friendlyName: _.capitalize(templateName),
        ...config[templateName]
      }

      // Create showcase route
      $stateProvider.state(`showcase.ovh-ui-kit.${templateName}`, {
        ...templateConfig,
        template: templates[templateName].template
      })

      // Create isolated component route
      $stateProvider.state(`isolated-ovh-ui-kit.${templateName}`, {
        ...templateConfig,
        template: templates[templateName].preview
      })
    })
  }
}

function loadAll (req) {
  let templates = []
  req.keys().forEach(readmeFile => {
    const matches = readmeFile.match(/oui-([^/]+)\//)
    if (matches && matches.length >= 2) {
      templates[matches[1]] = req(readmeFile)
    }
  })
  return templates
}

function requireLess () {
  return require.context('!templatePreview-loader!ovh-ui-kit/packages', true, /^\.\/((?!node_modules).)*\/README\.md$/)
}

export default TemplateUtils
