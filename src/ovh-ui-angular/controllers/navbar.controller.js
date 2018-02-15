import data from "ovh-ui-angular/packages/oui-navbar/src/index.spec.data.json";

export default class {
    constructor ($timeout) {
        "ngInject";

        this.$timeout = $timeout;
    }

    $onInit () {
        this.brand = angular.copy(data.brand);
        this.asideLinks = angular.copy(data.asideLinks);
        this.mainLinks = angular.copy(data.mainLinks);

        // Simulate a promise for togglerLinks
        const delay = 2500;
        this.$timeout(() => (this.togglerLinks = angular.copy(data.mainLinks)), delay);

    }
}
