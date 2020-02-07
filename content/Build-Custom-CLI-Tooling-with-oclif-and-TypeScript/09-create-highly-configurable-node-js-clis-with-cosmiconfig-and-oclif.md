---
title: "09. Create Highly Configurable Node.js CLIs with Cosmiconfig and Oclif"
metaTitle: "Create Highly Configurable Node.js CLIs with Cosmiconfig and Oclif"
metaDescription: "Config handling is one example of highly sharable business logic (just like authentication and backend syncing) - so we will also look at how to extract this out to a shared Base Command."
---

## Notes

Cosmiconfig will start where you tell it to start and search up the directory tree for the following:

- a `package.json` property
- a JSON or YAML, extensionless "rc file"
- an "rc file" with the extensions `.json, .yaml, .yml, or .js`.
- a `.config.js` CommonJS module

If your module's name is "myapp", cosmiconfig will search up the directory tree for configuration in the following places:

- a `myapp` property in package.json
- a `.myapprc` file in JSON or YAML format
- a `.myapprc.json` file
- a `.myapprc.yaml`, `.myapprc.yml`, or `.myapprc.js` file
- a `myapp.config.js` file exporting a JS object

Installing:

```bash
yarn add cosmiconfig
```

Result:

```js
const { cosmiconfigSync } = require("cosmiconfig");
// most of time sync searching is fine
const explorerSync = cosmiconfigSync("myfirstcli");
const searchedFor = explorerSync.search();
const loaded = explorerSync.load(pathToConfig);
// now you can use
// loaded.config - the parsed config object
// loaded.filepath - the path to the found config
```

## Personal Take

Comsiconfig is [very configurable](https://github.com/davidtheclark/cosmiconfig#cosmiconfigoptions) - you can modify where it searches and where it stops and how it loads.

## Additional Resources

See the docs for [async search](https://github.com/davidtheclark/cosmiconfig#usage) as well.
