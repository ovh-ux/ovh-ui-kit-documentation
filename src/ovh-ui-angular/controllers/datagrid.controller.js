import _ from "lodash";
import data from "ovh-ui-angular/packages/oui-datagrid/src/index.spec.data.json";
import metaData from "./data/datagrid.data.json";
import servers from "ovh-ui-angular/packages/oui-datagrid/src/servers.spec.data.json";

const defaultSliceSize = 50;

/* eslint-disable class-methods-use-this */
export default class {
    constructor ($timeout, orderByFilter, ouiDatagridService) {
        "ngInject";

        this.timeout = $timeout;
        this.orderBy = orderByFilter;
        this.ouiDatagridService = ouiDatagridService;
        this.metaData = metaData;
    }

    $onInit () {
        this.delay = 500;
        this.emptyList = [];

        this.timeout(() => {
            this.data = data;
            this.servers = servers;

            this.partialData = _.map(data.slice(0, defaultSliceSize), line => _.pick(line, ["firstName", "lastName"]));
        }, 1000); // eslint-disable-line no-magic-numbers

        this.label = "value";

        this.loadDatagridParameters();
    }

    loadPartialData ({ offset, pageSize, sort, criteria }) {
        let filteredData = data;
        criteria.forEach(criterion => {
            if (criterion.property === null && criterion.operator === "contains") {
                const pattern = new RegExp(criterion.value, "i"); // Naive implementation here...
                filteredData = filteredData.filter(row => pattern.test(row.firstName) ||
                    pattern.test(row.lastName)
                );
            } else if (criterion.property && criterion.value !== undefined) {
                switch (criterion.operator) {
                case "contains":
                    filteredData = filteredData.filter(item => {
                        const value = _.get(item, criterion.property);
                        const pattern = new RegExp(criterion.value, "i");
                        return pattern.test(value);
                    });
                    break;
                default: _.noop();
                }
            }


        });

        const sortedData = sort.property ? this.orderBy(filteredData, sort.property, sort.dir === -1) : data;
        const page = sortedData.slice(offset - 1, offset + pageSize - 1);

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

    loadRow ({ firstName, lastName }) { // eslint-disable-line
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(_.find(data, { firstName, lastName }));
            }, 500 + 1000 * Math.random()); // eslint-disable-line
        });
    }

    loadRandom (row) {
        return Promise.resolve({
            ...row,
            number: 1000 * Math.random() // eslint-disable-line
        });
    }

    loadRowWithRandom ({ firstName, lastName }) { // eslint-disable-line
        return this.loadRow({ firstName, lastName })
            .then(row => this.loadRandom(row));
    }

    refreshDatagrid (datagridId, showSpinner) {
        this.ouiDatagridService.refresh(datagridId, showSpinner);
    }

    getFromLocalStorage (key) {
        return JSON.parse(localStorage.getItem(key));
    }

    saveToLocalStorage (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    loadDatagridParameters () {
        this.datagridParameters = this.getFromLocalStorage("datagridsParams") || {};
    }

    onColumnsParametersChange (datagridId, columns) {
        this.datagridParameters[datagridId] = columns;
        this.saveToLocalStorage("datagridsParams", this.datagridParameters);
    }
}
