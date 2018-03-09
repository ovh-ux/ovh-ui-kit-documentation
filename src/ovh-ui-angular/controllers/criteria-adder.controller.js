import data from "./fixtures/criteria-adder.data.json";

export default class {
    $onInit () {
        this.inputValue = angular.copy(data.properties);
    }

    onSubmit (modelValue) {
        this.outputValue = angular.copy(modelValue);
    }
}
