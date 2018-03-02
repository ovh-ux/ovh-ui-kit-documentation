export default class {
    $onInit () {
        this.resetCount = 0;
    }

    onSearchChange (modelValue) {
        this.changedValue = modelValue;
    }

    onSearchSubmit (modelValue) {
        this.submittedValue = modelValue;
    }

    onSearchReset () {
        this.resetCount++;
    }
}
