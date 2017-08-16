import introductionTemplate from './introduction.md'
import contributingTemplate from './contributing.md'
import urlsTemplate from './urls.md'
import componentStatusTemplate from './component-status.md'
import lessPluginRemcalcTemplate from 'less-plugin-remcalc/README.md'

export default function ($stateProvider) {
  'ngInject'

  $stateProvider
    .state('showcase.documentation', {
      url: '/documentation',
      friendlyName: 'Documentation',
      groupName: 'Getting started',
      redirectTo: 'showcase.documentation.introduction',
      template: '<ui-view></ui-view>',
      weight: 9000
    })
    .state('showcase.documentation.introduction', {
      url: '/introduction',
      friendlyName: 'Introduction',
      template: introductionTemplate
    })
    .state('showcase.documentation.contributing', {
      url: '/contributing',
      friendlyName: 'Contributing',
      template: contributingTemplate
    })
    .state('showcase.documentation.urls', {
      url: '/urls',
      friendlyName: 'URLs',
      template: urlsTemplate
    })
    .state('showcase.documentation.component-status', {
      url: '/component-status',
      friendlyName: 'Component status',
      template: componentStatusTemplate
    })
    .state('showcase.documentation.less-plugin-remcalc', {
      url: '/less-plugin-remcalc',
      friendlyName: 'less-plugin-remcalc',
      template: lessPluginRemcalcTemplate
    })
}
