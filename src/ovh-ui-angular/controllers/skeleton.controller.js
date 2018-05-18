export default class {
    constructor ($timeout) {
        "ngInject";
        this.$timeout = $timeout;
        this.duration = 3000;
        this.loading = true;
    }

    $onInit () {
        this.$timeout(() => {
            this.loading = false;
        }, this.duration);
    }
}
