import data from "ovh-ui-angular/packages/oui-criteria-adder/src/index.spec.data.json";

export default class {
    $onInit () {
        this.inputValue = angular.copy(data.properties);
    }

    onSubmit (modelValue) {
        this.outputValue = angular.copy(modelValue);
    }
}
