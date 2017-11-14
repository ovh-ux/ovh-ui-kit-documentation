import 'angular'
import 'angular-ui-router'
import 'ovh-documentation-toolkit'
import 'ovh-ui-angular'

import 'highlightjs/styles/vs.css'

import './index.less'

import themesConfig from './init/themes.config'
import versionsConfig from './init/versions.config'
import componentStatusConfig from './init/component-status.config'
import DocumentationRoutes from './documentation/documentation.routes'
import OvhUiKitRoutes from './ovh-ui-kit/ovh-ui-kit.routes'
import OvhUiAngularRoutes from './ovh-ui-angular/ovh-ui-angular.routes'
import OvhGuidelinesRoutes from './guidelines/guidelines.routes'

const app = angular
  .module('ovh-ui-kit-documentation', [
    'ui.router',
    'ovh-documentation-toolkit',
    'oui'
  ])
  .config(themesConfig)
  .config(versionsConfig)
  .config(componentStatusConfig)
  .config(DocumentationRoutes)
  .config(OvhUiKitRoutes)
  .config(OvhUiAngularRoutes)
  .config(OvhGuidelinesRoutes)

require('./ovh-ui-angular/controllers/index')

export default app
