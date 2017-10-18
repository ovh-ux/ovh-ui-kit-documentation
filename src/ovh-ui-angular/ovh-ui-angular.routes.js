import introductionTemplate from 'ovh-ui-angular/README.md'
import checkboxTemplate from 'ovh-ui-angular/packages/oui-checkbox/README.md'
import radioTemplate from 'ovh-ui-angular/packages/oui-radio/README.md'
import radioGroupTemplate from 'ovh-ui-angular/packages/oui-radio-group/README.md'
import messageTemplate from 'ovh-ui-angular/packages/oui-message/README.md'
import loaderTemplate from 'ovh-ui-angular/packages/oui-loader/README.md'
import contributingTemplate from 'ovh-ui-angular/CONTRIBUTING.md'

import showCurrentValueInPopopController from './show-current-value-in-popup.controller'

export default function ($stateProvider) {
  'ngInject'

  $stateProvider
    .state('showcase.oui-angular', {
      url: '/oui-angular',
      friendlyName: 'oui-angular',
      groupName: 'oui-angular components',
      redirectTo: 'showcase.oui-angular.introduction',
      template: '<ui-view></ui-view>',
      weight: 9000
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
    .state('showcase.oui-angular.checkbox', {
      url: '/checkbox',
      friendlyName: 'Checkbox',
      template: checkboxTemplate,
      controller: showCurrentValueInPopopController,
      controllerAs: '$ctrl'
    })
    .state('showcase.oui-angular.radio', {
      url: '/radio',
      friendlyName: 'Radio',
      template: radioTemplate
    })
    .state('showcase.oui-angular.radio-group', {
      url: '/radio-group',
      friendlyName: 'Radio group',
      template: radioGroupTemplate,
      controller: showCurrentValueInPopopController,
      controllerAs: '$ctrl'
    })
    .state('showcase.oui-angular.message', {
      url: '/message',
      friendlyName: 'Message',
      template: messageTemplate
    })
    .state('showcase.oui-angular.loader', {
      url: '/loader',
      friendlyName: 'Loader',
      template: loaderTemplate
    })
}
