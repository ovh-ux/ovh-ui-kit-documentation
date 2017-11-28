export default () => ({
    restrict: "A",
    link: ($scope, $element) => {
        const tagName = $element.prop("tagName");
        const type = $element.attr("type");

        if (tagName && type && tagName.toLowerCase() === "input" && type.toLowerCase() === "checkbox") {
            $element.prop("indeterminate", true);
        }
    }
});
