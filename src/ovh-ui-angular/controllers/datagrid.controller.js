import _ from "lodash";
import data from "./datagrid.data.json";

const initialPageSize = 25;
const defaultSliceSize = 50;

/* eslint-disable class-methods-use-this */
export default class {
    constructor ($scope, $timeout, $state, orderByFilter) {
        "ngInject";

        this.orderBy = orderByFilter;
        this.scope = $scope;
        this.timeout = $timeout;
        this.$state = $state;
    }

    $onInit () {
        this.trigger = true;
        this.delay = 0;

        this.timeout(() => {
            this.data = data;

            this.partialData = _.map(data.slice(0, defaultSliceSize), line => _.pick(line, ["firstName", "lastName"]));
        }, 1000); // eslint-disable-line no-magic-numbers

        this.label = "value";
        this.pageLabel = "Page";
        this.emptyList = [];

        this.initialPageSize = this.$state.params.initialPageSize || initialPageSize;
    }

    loadData ({ offset, pageSize, sort, searchText }) {
        let filteredData;
        if (searchText) {
            const regExp = new RegExp(searchText, "i");
            filteredData = data.filter(row => regExp.test(row.firstName) ||
                regExp.test(row.lastName) ||
                regExp.test(row.email) ||
                regExp.test(row.phone) ||
                regExp.test(row.birth));
        } else {
            filteredData = data;
        }

        const sortedData = sort.property ? this.orderBy(filteredData, sort.property, sort.dir === -1) : data;
        const page = sortedData.slice(offset, offset + pageSize);

        // AngularJS independent logic
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    data: page,
                    meta: {
                        currentOffset: offset,
                        pageCount: Math.ceil(filteredData.length / pageSize),
                        totalCount: filteredData.length
                    }
                });
            }, this.delay);
        });
    }

    loadPartialData ({ offset, pageSize, sort, searchText }) {
        let filteredData;
        if (searchText) {
            const regExp = new RegExp(searchText, "i");
            filteredData = data.filter(row => regExp.test(row.firstName) ||
                regExp.test(row.lastName) ||
                regExp.test(row.email) ||
                regExp.test(row.phone) ||
                regExp.test(row.birth));
        } else {
            filteredData = data;
        }

        const sortedData = sort.property ? this.orderBy(filteredData, sort.property, sort.dir === -1) : data;
        const page = sortedData.slice(offset, offset + pageSize);

        // AngularJS independent logic
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    data: _.map(page, line => _.pick(line, ["firstName", "lastName"])),
                    meta: {
                        currentOffset: offset,
                        pageCount: Math.ceil(filteredData.length / pageSize),
                        totalCount: filteredData.length,
                        pageSize
                    }
                });
            }, this.delay);
        });
    }

    loadRow ({ firstName, lastName }) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(_.find(data, { firstName, lastName }));
            }, 500 + 1000 * Math.random()); // eslint-disable-line
        });
    }

    onSelectionChange (selection) {
        console.log(selection); // eslint-disable-line
    }

    getTemplate () {
        return `
      <div>
        {{row.parents.mother.lastName}}
        <span><b>{{row.parents.mother.firstName}}</b></span>
      </div>`;
    }

    runAction (row) {
        window.alert(`You clicked on ${row.firstName}`); // eslint-disable-line
    }

    onClickRow ($row, $event) {
        if (($event.type === "click" && $event.target.tagName === "TD") || $event.type === "keydown") {
            $event.preventDefault();
            window.alert(`You clicked on/pressed ${$row.firstName}`); // eslint-disable-line
        }
    }

    addElement () {
        this.emptyList.push(data[this.emptyList.length]);
    }

    redraw () {
        this.trigger = false;
        this.timeout(() => {
            this.trigger = true;
        });
    }

    changeDataOnFirstLine () {
        this.data[0].firstName = "TEST";
        this.data[0].lastName = "TEST";
    }

    showPerformances () {
        const entries = _.filter(performance.getEntries(), entry => _.includes(["link", "controllerInit", "updatePage"], entry.name));

        _.map(entries, entry => {
            console.log(entry.name, entry.duration); // eslint-disable-line
        });
    }
}
