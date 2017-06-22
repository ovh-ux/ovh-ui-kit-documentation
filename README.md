# OVH UI Documentation

![OVH component](https://user-images.githubusercontent.com/3379410/27423240-3f944bc4-5731-11e7-87bb-3ff603aff8a7.png)

This is a showcase application for our UI-Kit.

![Project status alpha](https://img.shields.io/badge/status-alpha-blue.svg) [![Github tag](https://img.shields.io/github/tag/ovh-ux/ovh-ui-kit-documentation.svg)]() ![Maintenance](https://img.shields.io/maintenance/yes/2017.svg) [![Chat on gitter](https://img.shields.io/gitter/room/ovh/ux.svg)](https://gitter.im/ovh/ux)

## Quick start

```bash
$ git clone https://github.com/ovh-ux/ovh-ui-kit-documentation.git
$ cd ovh-ui-kit-documentation
$ yarn install
$ yarn start
```

## Develop

# Hot reload

Once you have `yarn start`-ed the project, you can edit anything with an automatic browser refresh as a result.

# ovh-documentation-toolkit

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

## Contribute

Please refer to [CONTRIBUTING](CONTRIBUTING.md).
