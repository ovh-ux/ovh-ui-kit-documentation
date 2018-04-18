import data from "ovh-ui-angular/packages/oui-dual-list/src/index.spec.data.json";

/* eslint-disable class-methods-use-this */
export default class {
    constructor ($timeout, $q) {
        "ngInject";

        this.staticUsers = [];
        this.$timeout = $timeout;
        this.$q = $q;
        this.WAIT_TIME = 5000;
    }

    $onInit () {
        this.delay = 0;
        this.emptySource = [];
        this.emptyDestination = [];
        this.data = data;

        const deferredUsers = this.$q.defer();
        const deferredSelectedUsers = this.$q.defer();
        this.laxyUsersList = deferredUsers.promise;
        this.laxySelectedUsersList = deferredSelectedUsers.promise;
        this.$timeout(() => {
            deferredUsers.resolve(this.data.objects.users);
            deferredSelectedUsers.resolve(this.data.objects.selectedUsers);
        }, this.WAIT_TIME);
    }

    add () {
        const deferred = this.$q.defer();
        this.$timeout(() => {
            deferred.resolve();
        }, this.WAIT_TIME);
        return deferred.promise;
    }

    remove () {
        const deferred = this.$q.defer();
        this.$timeout(() => {
            deferred.resolve();
        }, this.WAIT_TIME);
        return deferred.promise;
    }
}
