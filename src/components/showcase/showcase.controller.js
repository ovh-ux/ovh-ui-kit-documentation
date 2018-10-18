import _ from "lodash";

export default class ShowcaseController {
    constructor ($state, $transitions, StateHelpers) {
        "ngInject";

        this.$state = $state;
        this.StateHelpers = StateHelpers;
        this.rootState = "showcase";

        this.rootChildren = this.getOrderedChildrenState(this.rootState);
        this.secondLevelsChildren = this.getSecondLevelsChildren();
        this.currentItemExpanded = 0;
        this.currentSecondLevelStateName = this.getCurrentSecondLevelStateName();

        this.mainLinks = [];

        this.mainLinks.push(...this.rootChildren.map(rootChild => ({
            name: rootChild.state,
            title: rootChild.name,
            isPrimary: true,
            url: $state.href(rootChild.state)
        })));

        this.mainLinks.forEach(link => {
            const state = link.name;
            const subLinks = [];

            if (!state || !this.secondLevelsChildren[state]) {
                return;
            }

            if (this.secondLevelsChildren[state].children.undefined) {
                subLinks.push(...this.getLinks(state, "undefined"));
            }

            (this.secondLevelsChildren[state].groupsOrder || []).forEach(groupName => {
                if (groupName === "undefined") {
                    return;
                }

                subLinks.push({
                    name: `${state}_${groupName}`,
                    title: this.secondLevelsChildren[state].groups[groupName].name,
                    subLinks: this.getLinks(state, groupName)
                });
            });

            link.subLinks = subLinks;
        });

        $transitions.onStart({}, trans => {
            this.currentSecondLevelStateName = ShowcaseController.getSecondLevelStateName(trans.$to().name);
        });
    }

    getLinks (state, groupName) {
        return this.secondLevelsChildren[state].children[groupName].map(link => ({
            name: link.state,
            title: link.name,
            state: link.state
        }));
    }

    $onDestroy () {
        this.stateChangeSuccessHandler();
    }

    getOrderedChildrenState (stateName) {
        let childrenState = _.sortBy(this.StateHelpers.getChildren(stateName), (childState) => -1 * _.get(childState, "weight", 0));
        childrenState = _.map(childrenState, (childState) => ({
            state: childState.name,
            name: _.get(childState, "friendlyName", `<unnamed state: ${childState.name}>`),
            groups: _.get(childState, "groups"),
            group: _.get(childState, "group")
        }));
        return childrenState;
    }

    getOrderedAndGroupedChildrenState (stateName) {
        return _.groupBy(this.getOrderedChildrenState(stateName), "group");
    }

    static getGroupsOrder (orderedAndGroupedChildrenState, groupsDetails) {
        const keys = Object.keys(orderedAndGroupedChildrenState);
        return _.orderBy(keys, groupName =>

            // The -9999 weigth is arbitrary, it is only to keep the
            // ungrouped element at the beginning of the list so the
            // user can use negative and positive values.
            groupName === "undefined" ? -Infinity : -1 * _.get(groupsDetails, [groupName, "weight"], 0)
        );
    }

    getSecondLevelsChildren () {
        let secondLevelsChildren = _.map(this.rootChildren, (rootChild) => {
            const orderedAndGroupedChildrenState = this.getOrderedAndGroupedChildrenState(rootChild.state);
            const groupsDetails = _.get(rootChild, "groups");

            return [rootChild.state, {
                name: this.getSecondLevelGroupName(rootChild.state),
                children: orderedAndGroupedChildrenState,
                groupsOrder: ShowcaseController.getGroupsOrder(orderedAndGroupedChildrenState, groupsDetails),
                groups: groupsDetails
            }];
        });
        secondLevelsChildren = _.fromPairs(secondLevelsChildren);
        return secondLevelsChildren;
    }

    static getSecondLevelStateName (stateName) {
        let secondLevelStateName = _.split(stateName, ".");
        secondLevelStateName = _.take(secondLevelStateName, 2);
        secondLevelStateName = _.join(secondLevelStateName, ".");
        return secondLevelStateName;
    }

    getCurrentSecondLevelStateName () {
        return ShowcaseController.getSecondLevelStateName(this.$state.current.name);
    }

    getSecondLevelGroupName (stateName) {
        return _.get(this.$state.get(stateName), "groupName", `<groupName property missing on state ${stateName}>`);
    }

    updateSecondLevelInformation (state) {
        this.secondLevelRootState = ShowcaseController.getSecondLevelStateName(state.name);
        this.secondLevelRootStateNoChildrenMessage = `No children found under state ${this.secondLevelRootState}`;
        this.secondLevelGroupName = this.getSecondLevelGroupName(this.secondLevelRootState);
    }
}
