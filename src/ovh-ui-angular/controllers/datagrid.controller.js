import _ from "lodash";
import data from "ovh-ui-angular/packages/oui-datagrid/src/index.spec.data.json";
import metaData from "./data/datagrid.data.json";
import servers from "ovh-ui-angular/packages/oui-datagrid/src/servers.spec.data.json";

const defaultSliceSize = 50;

/* eslint-disable class-methods-use-this */
export default class {
    constructor ($timeout, orderByFilter) {
        "ngInject";

        this.orderBy = orderByFilter;
        this.timeout = $timeout;
        this.metaData = metaData;
    }

    $onInit () {
        this.delay = 0;
        this.emptyList = [];

        this.timeout(() => {
            this.data = data;
            this.servers = servers;

            this.partialData = _.map(data.slice(0, defaultSliceSize), line => _.pick(line, ["firstName", "lastName"]));
        }, 1000); // eslint-disable-line no-magic-numbers

        this.label = "value";
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
}
