# Decisions

1. Use two-way bindings with `ng-model` and one-way bindings for read-only components
2. Add class to the root component element instead of using the deprecated directive `replace: true` attribute
3. Use `component` method for **elements** only and `directive` method for **attributes**
4. Keep translation outside this library

## Use two-way bindings with `ng-model` and one-way bindings for read-only components

When a component requires something with `ng-model` (like an input, checkbox, ...) you should use two-way bindings. If the component only show values and no interaction are made with them you should use one-way bindings.

After some tests it has been found that, in angularJs, none of those solutions seems better but angularJs gives more tools for two-ways bindings than one-way. With two-ways bindings we can reuse ng-model with validations and it is easier to be propagate value changes to parent. Maybe it is not what angular 2 recommends, but it is easier and will cost less in development in short term.

## Add class to the root component element instead of using the deprecated directive `replace: true` attribute

Because the `replace: true` directive attribute has been deprecated since angular 1.5 this method should be prohibited. Also, this technic can create futur problem because angular produce conflit and they are hard to debug. Example: If you put an `ng-if` condition at the component's root element and the parent also put an `ng-if` on the component, the component can have weird behavior like never being added to DOM.

So, because `replace: true` can't be used, how use `:first-child` css classes if components are always wrapped? To resolve this problem lot of libraries are adding classes to the root element of component in the `link` method.

```javascript
angular.directive("test", function () {
  return {
    link: function ($scope, $element) {
      $element.addClass("test");
    }
  }
});
```

## Use `component` method for **elements** only and `directive` method for **attributes**

Since we can access `postLink` and `$element` from components we can still use the `component` method for components that are made for **elements** (`restrict: "E"`).

**Important:** Try to never use `$element` outside the `$postLink` method.

```javascript
angular.component("test", {
  controller: class TestCtrl {
    constructor($element) {
      this.$element = $element;
    }

    $postLink() {
      this.$element.addClass("test");
    }
  }
})
```

If a component is required on **attributes** (`restrict: "A"`) directive should used.

```javascript
angular.directive("test", function () {
  return {
    restrict: "A",
    link: function ($scope, $element) {
      $element.addClass("test");
    }
  }
});
```

## Keep translation outside this library

No translation should be stored in the library and strings should be given to the component in attributes.
