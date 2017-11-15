import templateUtils from 'src/utils/template-utils'
import config from './guidelines.config.json'

const templates = templateUtils.loadGuidelinesReadme()

export default function ($stateProvider) {
  'ngInject'

  $stateProvider
    .state('showcase.guidelines', {
      url: '/guidelines',
      friendlyName: 'Guidelines',
      groupName: 'Guidelines',
      redirectTo: 'showcase.guidelines.checkbox',
      template: '<ui-view></ui-view>',
      weight: 8000,
      groups: {
        form: {
          name: 'Form',
          weight: 9000
        }
      }
    })

  templateUtils.addGuidelinesComponentStates($stateProvider, templates, config)
}
