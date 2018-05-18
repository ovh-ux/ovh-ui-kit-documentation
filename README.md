# OVH UI Documentation

![OVH component](https://user-images.githubusercontent.com/3379410/27423240-3f944bc4-5731-11e7-87bb-3ff603aff8a7.png)

This is a showcase application for our UI-Kit.

![Project status alpha](https://img.shields.io/badge/status-alpha-blue.svg) [![Github tag](https://img.shields.io/github/tag/ovh-ux/ovh-ui-kit-documentation.svg)]() ![Maintenance](https://img.shields.io/maintenance/yes/2018.svg) [![Chat on gitter](https://img.shields.io/gitter/room/ovh/ux.svg)](https://gitter.im/ovh/ux)

## Quick start

```bash
$ git clone https://github.com/ovh-ux/ovh-ui-kit-documentation.git
$ cd ovh-ui-kit-documentation
$ yarn install
$ yarn start
```

## Develop

### Hot reload

Once you have `yarn start`-ed the project, you can edit anything with an automatic browser refresh as a result.

### ovh-documentation-toolkit

This documentation uses the ovh-documentation-toolkit to display the components status, manage the active theme, etc...
If you have to update the code of this project, you can simply clone and link it with the ovh-ui-kit-documentation.

```bash
$ git clone https://github.com/ovh-ux/ovh-documentation-toolkit.git
$ cd ovh-documentation-toolkit
$ yarn link
$ cd path/to/ovh-ui-kit-documentation
$ yarn link ovh-documentation-toolkit
```

Now, each modification on `ovh-documentation-toolkit` will benefit from hot-reloading.

### Reorganize components

`ovh-ui-kit` and `ovh-ui-angular` components are automatically added to the project and listed in menus. Sometimes, the default order is not good and it can be changed through `.config.json` files under respective project folders. Auto discovery of components is made by webpack using [`require.context(...)`](https://webpack.js.org/guides/dependency-management/#require-context) feature.

On those json files, you can specify multiple attributes to organize and get better menu items. Those attributes are the same from [second level children states](https://github.com/ovh-ux/ovh-documentation-toolkit/blob/master/README.md) from `ovh-documentation-toolkit`. Those files are using *key-value* mapping where *key* are the folder name of the component and the *value* is the configuration to inject to the component state.

```json
{
    "typography": {
        "weight": 3000,
        "group": "basic",
        "friendlyName": "A better name for my component
    }
}
```

## Contribute

Please refer to [CONTRIBUTING](CONTRIBUTING.md).
