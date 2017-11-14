import introductionTemplate from 'ovh-ui-angular/README.md'
import contributingTemplate from 'ovh-ui-angular/CONTRIBUTING.md'
import templateUtils from 'src/utils/template-utils'
import config from './ovh-ui-angular.config.json'

const templates = templateUtils.loadAngularJSReadme()

export default function ($stateProvider) {
  'ngInject'

  $stateProvider
    .state('showcase.oui-angular', {
      url: '/oui-angular',
      friendlyName: 'oui-angular',
      groupName: 'oui-angular components',
      redirectTo: 'showcase.oui-angular.introduction',
      template: '<ui-view></ui-view>',
      weight: 6000,
      groups: {
        basic: {
          name: 'Basic',
          weight: 9000
        },
        form: {
          name: 'Form',
          weight: 8000
        },
        data: {
          name: 'Data',
          weight: 7000
        },
        notice: {
          name: 'Notice',
          weight: 6000
        },
        nav: {
          name: 'Navigation',
          weight: 5000
        },
        others: {
          name: 'Others',
          weight: 0
        }
      }
    })
    .state('showcase.oui-angular.introduction', {
      url: '/introduction',
      friendlyName: 'Introduction',
      template: introductionTemplate
    })
    .state('showcase.oui-angular.contributing', {
      url: '/contributing',
      friendlyName: 'Contributing',
      template: contributingTemplate
    })

  templateUtils.addAngularJSComponentStates($stateProvider, templates, config)
}
