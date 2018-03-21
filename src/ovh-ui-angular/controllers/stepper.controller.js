export default class StepperController {
    constructor () {
        "ngInject";

        this.stepTitle = "step title";
        this.stepTitle2 = "step title 2";
    }

    stepSubmit (form) {
        console.log("stepSubmit", form, this); // eslint-disable-line
    }

    stepSubmit2 (form) {
        console.log("stepSubmit2", form, this); // eslint-disable-line
    }
}
