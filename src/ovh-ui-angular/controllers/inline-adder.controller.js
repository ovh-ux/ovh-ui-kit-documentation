import data from "./inline-adder-data.json";

export default class {
    constructor ($q, $timeout) {
        "ngInject";
        this.$q = $q;
        this.$timeout = $timeout;
        this.waitingTime = 2000;
    }

    $onInit () {
        this.data = data;
        this.singleFieldItems = [this.getNewItem(this.data.fieldTypes.singleField)];
        this.dualFieldItems = [this.getNewItem(this.data.fieldTypes.dualField)];
        this.tripleFieldItems = [this.getNewItem(this.data.fieldTypes.tripleField)];
        this.quadraFieldItems = [this.getNewItem(this.data.fieldTypes.quadraField)];
    }

    getNewItem (fieldCount) {
        switch (fieldCount) {
        case this.data.fieldTypes.singleField:
            return Object.assign({}, this.data.singleFieldItem);
        case this.data.fieldTypes.dualField:
            return Object.assign({}, this.data.dualFieldItem);
        case this.data.fieldTypes.tripleField:
            return Object.assign({}, this.data.tripleFieldItem);
        case this.data.fieldTypes.quadraField:
            return Object.assign({}, this.data.quadraFieldItem);
        default:
            return {};
        }
    }

    addItem (item) {
        const deferred = this.$q.defer();
        this.$timeout(() => {
            item.isNew = false;
            switch (item.fieldCount) {
            case this.data.fieldTypes.singleField:
                this.singleFieldItems.push(this.getNewItem(item.fieldCount));
                break;
            case this.data.fieldTypes.dualField:
                this.dualFieldItems.push(this.getNewItem(item.fieldCount));
                break;
            case this.data.fieldTypes.tripleField:
                this.tripleFieldItems.push(this.getNewItem(item.fieldCount));
                break;
            case this.data.fieldTypes.quadraField:
                this.quadraFieldItems.push(this.getNewItem(item.fieldCount));
                break;
            default:
                break;
            }
            deferred.resolve();
        }, this.waitingTime);
        return deferred.promise;
    }

    removeItem (item) {
        const deferred = this.$q.defer();
        this.$timeout(() => {
            switch (item.fieldCount) {
            case this.data.fieldTypes.singleField:
                this.singleFieldItems.splice(this.singleFieldItems.indexOf(item), 1);
                break;
            case this.data.fieldTypes.dualField:
                this.dualFieldItems.splice(this.dualFieldItems.indexOf(item), 1);
                break;
            case this.data.fieldTypes.tripleField:
                this.tripleFieldItems.splice(this.tripleFieldItems.indexOf(item), 1);
                break;
            case this.data.fieldTypes.quadraField:
                this.quadraFieldItems.splice(this.quadraFieldItems.indexOf(item), 1);
                break;
            default:
                break;
            }
            deferred.resolve();
        }, this.waitingTime);
        return deferred.promise;
    }
}
