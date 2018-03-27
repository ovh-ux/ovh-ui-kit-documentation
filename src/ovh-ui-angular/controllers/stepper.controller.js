export default class StepperController {
    onInit (value) {
        this.onInitModel = value;
    }

    onFinish (forms) {
        this.onFinishForms = forms;
    }

    onFocus (value) {
        this.onfocusModel = value;
    }

    onSubmit (form) {
        this.onSubmitForm = form;
    }
}
