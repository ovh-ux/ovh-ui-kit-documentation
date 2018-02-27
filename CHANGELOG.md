# Changelog

## v2.4.0

### ovh-ui-kit

#### Features

- Add textarea component
- Add search and broken chain icons
- Add select, dropdown, textarea and button error styles

#### Fixes

- Fix select, dropdown, textarea, button and field styles

### ovh-ui-angular

#### Features

- Add textarea component
- Add radio-group component
- Manage textarea and select errors in field component

#### Fixes

- Update menu header and active item for navbar
- Hide empty sublink for navbar

#### Documentation

- Add textarea and radio-group component

## v2.3.0

### ovh-ui-kit

#### Features

- Add back-button component
- Add select component


#### Fixes

- Fix action-menu colors
- Fix navbar menu colors
- Fix navbar toggle visibility
- Fix datagrid cell position
- Fix modal shadow color
- Fix dropdown button styles

### ovh-ui-angular

#### Features

- Add title to existing back-button component
- Add a toggler-links attribute to navbar
- Add select component

#### Fixes

- Update navbar template for internal menus
- Prevent datagrid to render empty cell when template contains only white spaces

#### Documentation

- Add back-button and select components

## v2.2.0

### ovh-ui-kit

#### Features

- Add field component
- Add modal component
- Add disabled style on disabled action-menu item
- Add versions on icon paths

#### Fixes

- Remove useless margin on radio
- Fix error colors on input
- Fix margin on label
- Fix responsive for desktop
- Fix transition slide on navbar
- Change responsive breakpoint on navbar

### ovh-ui-angular

#### Features

- Add field component
- Add modal component
- Add required attribute on checkbox
- Add spinner between page changes on datagrid
- Add disabled attribute to disable item on action-menu

#### Fixes

- Prevent useless calls to row-loader on datagrid
- Close the notification menu when clicked on navbar
- Fix transition slide on navbar
- Avoid sorting if property attribute is not set on datagrid column

#### Documentation

- Improve datagrid documentation

## v2.1.0

### ovh-ui-kit

#### Fixes

- Fix accessibility on navbar

### ovh-ui-angular

#### Features

- Add navbar component

#### Documentation

- Improve datagrid documentation

## v2.0.2

### ovh-ui-angular

#### Fixes

- Fix unwanted properties on component tags (e.g. `aria-label`, `id`, `name`, ...)

## v2.0.1

### ovh-ui-kit

#### Fixes

- Remove pointer cursor on unsortable `oui-datagrid`'s column headers

#### Documentation

- Changelog moved to `ovh-ui-kit-documentation`

### ovh-ui-angular

#### Fixes

- `oui-button` and `oui-back-button` tests fixed

##### oui-datagrid

- Handle `data-` prefixes on `oui-column`
- Add scope context to process header titles

#### Documentation

- Changelog moved to `ovh-ui-kit-documentation`
- Remove licence file extension

### ovh-ui-kit-documentation

- `ovh-ui-kit` and `ovh-ui-angular` changelogs moved to `ovh-ui-kit-documentation`

## v2.0.0

### ovh-ui-kit

#### Breaking changes

- Update `oui-navbar` styles and markup
- New height for multiple components (40px):
    - `oui-button`
    - `oui-button-group`
    - `oui-input`
    - `oui-input-group`
    - `oui-select`
    - `oui-checkbox`
    - `oui-radio`
- New padding for `oui-button`
- New markup for `oui-checkbox` (icon has been moved from container to label)

### ovh-ui-angular

#### Breaking change
- Consider `ovh-ui-kit` as a peer dependency instead of a dependency

##### oui-checkbox
- No `oui-checkbox-label` and `oui-checkbox-description` transcludes anymore
- Modifiers no more supported (big and thumbnails)

##### oui-radio
- No `oui-radio-label` and `oui-radio-description` transcludes anymore
- Modifiers no more supported (big and thumbnails)

##### oui-message
- Default aria-label removed for close button
- `message`, `dismissable` and `on-dismiss` attributes removed

##### oui-spinner
- Rename `oui-loader` to `oui-spinner`
- No more `align` and `inline` attributes

#### New components
- `oui-button`
- `oui-back-button`
- `oui-numeric`
- `oui-dropdown`
- `oui-action-menu`
- `oui-tooltip`
- `oui-pagination`
- `oui-datagrid`

#### New features
- Indeterminate state support on `oui-checkbox`
- Use OVH's eslint config

#### Fixes
- Can run `karma` and `karma:watch` commands on Windows

#### Doc
- Update years inside license and readme

### ovh-ui-kit-documentation

#### New features
- Create routes and categories for `ovh-ui-kit` and `ovh-ui-angular`

#### Dependencies
- Update `ovh-documentation-toolkit` to `v1.0.0`
- Update `ovh-ui-kit` to `v2.0.0`
- Update `ovh-ui-angular` to `v2.0.0`

##### oui-spinner
- Rename `oui-loader` to `oui-spinner`
- Inline element instead of block element

#### New components
- `oui-tooltip`
- `oui-dropdown`
- `oui-action-menu`
- `oui-pagination`
- `oui-datagrid`

#### New features
- Indeterminate state support for `oui-checkbox`

#### Fixes
- Disable state when icon only for `oui-button`
- Support `popper.js` for `oui-tip`
- Support `oui-button_primary` and `oui-button_secondary` under `oui-input-group`
- Update `oui-button` styles (colors and animations)
- Update `oui-checkbox` styles (colors and animations)
- Update `oui-input-group` styles (colors and animations)
- Add font-smoothing that works only on Mac

#### Doc
- DCO part removal from contributing.md
- Update years inside license and readme

## v1.1.1

### ovh-ui-angular

#### Build:

- Add Webpack 3
- Remove Lerna

## v1.1.0

### ovh-ui-angular

#### New feature:

- Loader component

## v1.0.0-alpha.20

### ovh-ui-kit

#### Fixes

- Loader improvements (fix alignment, add modifier...)

#### Doc

- Add guidelines

## v1.0.0-alpha.19

### ovh-ui-kit

#### Fixes
- Adjusts button spaces
- Fix progress component label

## v1.0.0-alpha.18

### ovh-ui-kit

#### New features
- Support of `ui-icon-error_circle`, `oui-icon-help_circle`, `oui-icon-success_circle`, `oui-icon-info_circle` and `oui-icon-warning_circle` icons inside modal
- Add thresholds on progress component
- Add a default size on field component (full width)

#### Fixes
- Force width auto to other inline components
- Update checkboxes size to be like radios
- Better label alignment on progress component
- `oui-input-group_numeric` width now the same on all browsers
