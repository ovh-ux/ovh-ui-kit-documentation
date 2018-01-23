import data from "ovh-ui-angular/packages/oui-navbar/src/index.spec.data.json";

export default class {
    $onInit () {
        this.brand = angular.copy(data.brand);
        this.asideLinks = angular.copy(data.asideLinks);
        this.mainLinks = angular.copy(data.mainLinks);
    }
}
