export default class {
    constructor () {
        "ngInject";

        this.disableTab3 = true;
        this.showTab11 = false;
        this.activeTab = null;
    }

    onActivate (tab) {
        this.activeTab = tab;
    }
}
