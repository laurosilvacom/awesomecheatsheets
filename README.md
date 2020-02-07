<div align="center">
  <img
    height="300"
    width="300"
    alt="Awesome Cheatsheets Logo"
    src="https://raw.githubusercontent.com/laurosilvacom/awesomecheatsheets/master/static/icon.png"
    align="center"
  />
</div>

<div align="center">
  <p align="center">

[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
[![Netlify Status](https://api.netlify.com/api/v1/badges/477d7ede-6d6d-48c8-9527-cbc7206cbe7b/deploy-status)](https://app.netlify.com/sites/awesomecheatsheets/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

  </p>
</div>

This is meant to be a community resource, so feel free to contribute by adding your notes/cheatsheets.

# Contributing

Some key points to follow so that this repo doesn't get too wild.

- This repo hosts cheatsheet for egghead courses only.
- One cheatsheet per course.
- If a course has already been covered, feel free to submit additions.

### Development

Get started by running the following commands:

```
$ git clone git@github.com:laurosilvacom/awesomecheatsheets.git
$ npm install
$ npm start
```

Visit `http://localhost:8000/` to view the app.

### Adding new cheatsheet

1. At the `root` of the folder `content` add the index file for your cheatsheet.

2. Create a folder with the same name. Inside this folder you’ll add a `.md` document for each lesson.

3. Link to the repository from `/content/index.md`.

4. The final step is to add `force collapse`. Go into `config.js` and add the name of your folder inside the `collapsedNav` object.

### Adding Author component

First import the `CheetsheatAuthor` component.

```
import CheatsheetAuthor from '../src/CheatsheetAuthor.js';
```

Then add the component in the same `*.md` file, following this example:

```
<CheatsheetAuthor
    name="Lauro Silva"
    twitterUrl="https://twitter.com/laurosilvacom"
    githubUrl="https://github.com/laurosilvacom"
    description="Software Engineer"
/>
```

### Questions

If you see anything wrong or missing, please file an [issue](https://github.com/laurosilvacom/awesomecheatsheets/issues/new).

## Contributors

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://laurosilva.com"><img src="https://avatars2.githubusercontent.com/u/57044804?v=4" width="100px;" alt=""/><br /><sub><b>Lauro Silva</b></sub></a><br /><a href="#content-laurosilvacom" title="Content">🖋</a> <a href="https://github.com/laurosilvacom/awesomecheatsheets/commits?author=laurosilvacom" title="Documentation">📖</a> <a href="#maintenance-laurosilvacom" title="Maintenance">🚧</a> <a href="https://github.com/laurosilvacom/awesomecheatsheets/pulls?q=is%3Apr+reviewed-by%3Alaurosilvacom" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://ianjones.us/"><img src="https://avatars2.githubusercontent.com/u/4407263?v=4" width="100px;" alt=""/><br /><sub><b>Ian Jones</b></sub></a><br /><a href="#content-theianjones" title="Content">🖋</a> <a href="#ideas-theianjones" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/nikkilr88"><img src="https://avatars3.githubusercontent.com/u/24983331?v=4" width="100px;" alt=""/><br /><sub><b>Nikki L.R.</b></sub></a><br /><a href="#content-nikkilr88" title="Content">🖋</a> <a href="https://github.com/laurosilvacom/awesomecheatsheets/commits?author=nikkilr88" title="Code">💻</a></td>
    <td align="center"><a href="https://zacjones.io"><img src="https://avatars2.githubusercontent.com/u/6188161?v=4" width="100px;" alt=""/><br /><sub><b>Zac Jones</b></sub></a><br /><a href="#content-zacjones93" title="Content">🖋</a> <a href="#ideas-zacjones93" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
