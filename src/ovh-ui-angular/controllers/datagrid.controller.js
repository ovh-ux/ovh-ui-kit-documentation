import _ from "lodash";
import data from "ovh-ui-angular/packages/oui-datagrid/src/index.spec.data.json";

const defaultSliceSize = 50;

/* eslint-disable class-methods-use-this */
export default class {
    constructor ($timeout, orderByFilter) {
        "ngInject";

        this.orderBy = orderByFilter;
        this.timeout = $timeout;
    }

    $onInit () {
        this.delay = 0;

        this.timeout(() => {
            this.data = data;

            this.partialData = _.map(data.slice(0, defaultSliceSize), line => _.pick(line, ["firstName", "lastName"]));
        }, 1000); // eslint-disable-line no-magic-numbers

        this.label = "value";
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

    loadRow ({ firstName, lastName }) { // eslint-disable-line
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(_.find(data, { firstName, lastName }));
            }, 500 + 1000 * Math.random()); // eslint-disable-line
        });
    }
}
