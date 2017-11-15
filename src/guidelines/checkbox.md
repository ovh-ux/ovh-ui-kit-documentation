# Checkbox

## General Rules

Checkboxes are used to make a choice that must be confirmed by submitting a form. For an instantaneous choice (without submit), the use of a switch is preferred (see Switch).

A label is always required. The only exception is the checkboxes used for bulk actions in tables rows (see Line Actions and Bulk Actions).

The label is positioned on the right of the checkbox.

The interaction (check/uncheck) is possible on the whole element : checkbox + label.

A checkboxes group is displayed vertically. It is not permitted to display many checkboxes next to each other on the same line.

## States

By default, depending on the use case, the checkbox can be checked or unchecked.

### Unchecked

The checkbox is not checked.

```html:preview
<oui-checkbox data-text="Enabled"></oui-checkbox>
<oui-checkbox data-text="Disabled" data-disabled></oui-checkbox>
```

### Checked

The checkbox is checked.

```html:preview
<div ng-init="$ctrl.checked = true">
  <oui-checkbox data-text="Enabled" data-model="::$ctrl.checked"></oui-checkbox>
  <oui-checkbox data-text="Disabled" data-model="::$ctrl.checked" data-disabled></oui-checkbox>
</div>
```

### Indeterminate

The checkbox is "partially checked".

For example, a checkbox may have child checkboxes. If all the children are checked, the parent is checked. If no children is checked, the parent is unchecked. If some children are checked, the parent is in an indeterminate state (partially checked).

The checkbox is checked.

```html:preview
<div ng-init="$ctrl.indeterminate = null">
  <oui-checkbox data-text="Enabled" data-model="::$ctrl.indeterminate"></oui-checkbox>
  <oui-checkbox data-text="Disabled" data-model="::$ctrl.indeterminate" data-disabled></oui-checkbox>
</div>
```

## DO

Checkbox Group :

```html:preview
<oui-checkbox data-text="Label"></oui-checkbox>
<oui-checkbox data-text="Label"></oui-checkbox>
<oui-checkbox data-text="Label"></oui-checkbox>
```

Clickable Area :

```html:preview
<oui-checkbox data-text="Label"></oui-checkbox>
```

## DON'T

Checkbox Group :

```html:preview
<style>
  .guidelines-inline-checkboxes .oui-checkbox {
    display: inline-block;
    margin-right: 25px;
  }
</style>

<div class="guidelines-inline-checkboxes">
  <oui-checkbox data-text="Label"></oui-checkbox>
  <oui-checkbox data-text="Label"></oui-checkbox>
  <oui-checkbox data-text="Label"></oui-checkbox>
</div>
```

Clickable Area :

```html:preview
<style>
  .guidelines-external-label .oui-checkbox {
    display: inline-block;
  }

  .guidelines-external-label > span {
    font-weight: bold;
  }
</style>

<div class="guidelines-external-label">
  <oui-checkbox></oui-checkbox>
  <span>Label</span>
</div>
```
