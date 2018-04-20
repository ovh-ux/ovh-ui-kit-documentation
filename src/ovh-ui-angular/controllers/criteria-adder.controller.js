import data from "./data/criteria-adder.data.json";

export default class {
    $onInit () {
        this.inputValue = angular.copy(data.properties);
    }

    onSubmit (modelValue) {
        this.outputValue = angular.copy(modelValue);
    }
}
