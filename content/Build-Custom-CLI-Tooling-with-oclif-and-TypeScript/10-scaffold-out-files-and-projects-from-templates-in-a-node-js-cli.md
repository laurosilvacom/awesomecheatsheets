---
title: "10. Scaffold out Files and Projects from Templates in a Node.js CLI"
metaTitle: "Create Highly Configurable Node.js CLIs with Cosmiconfig and Oclif"
metaDescription: "There is no standardized tooling for doing scaffolding, since you can use everything from the Express.js templating languages to writing your own, but we explore this problem space with the tiny copy-template-dir library to prove out the developer experience of adding scaffolding to your CLI."
---

## Notes

The best library for this is [copy-template-dir](https://www.npmjs.com/package/copy-template-dir).

Given a source folder and a destination folder, copy from one to the other.

```typescript
const copy = require('copy-template-dir')
const path = require('path')

const vars = { foo: 'bar' }
const inDir = path.join(process.cwd(), 'templates')
const outDir = path.join(process.cwd(), 'dist')

copy(inDir, outDir, vars, (err, createdFiles) => {
  if (err) throw err
  createdFiles.forEach(filePath => console.log(`Created ${filePath}`))
  console.log('done!')
})

// promise based alternative
const {promisify} = require('utils')
promisify(copy(inDir, outDir, vars))
  .then(() => console.log('done'))
  .catch(err => throw err)
```

## Personal Take

- Scaffolding is nice to have for your CLI.

## Additional Resources

Other Express templating libraries:

- https://www.npmjs.com/package/consolidate
- https://www.npmjs.com/package/ejs

As well as specific template flavors:

- http://mustache.github.com/mustache.5.html
- https://github.com/wycats/handlebars.js
- https://github.com/Shopify/liquid
