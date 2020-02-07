This is a community led site to showcase awesome cheatsheets created from egghead courses. This is meant to be a community resource, so feel free to contribute by adding your notes/cheatsheets.

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<div align="center">
  <img
    height="300"
    width="300"
    alt="Awesome Cheatsheets Logo"
    src="https://raw.githubusercontent.com/laurosilvacom/awesomecheatsheets/master/static/icon.png"
    align="center"
  />
</div>

## How to contribute

We are actively looking for contributors and maintainers, so you are more than welcome. Some core principles that we will follow so that this repo doesn't get too wild.

- This repo hosts cheatsheets for egghead course only.
- One cheatsheet per course.
- One document for each lesson in the course.
  - Each lesson includes notes that follow the same structure of the lesson/transcript, additional rewrites, links to resources, and your personal take on the lesson.
- If a course has already been covered, feel free to submit additions. But please don't remove anything (unless we messed up or misunderstood something, or you consider important adding additional resources).

That's all I've got! Again, really happy you are thinking about helping out, who knows, the person who you might be helping is yourself in future!

## Quickstart

Get started by running the following commands:

```
$ git clone git@github.com:laurosilvacom/awesomecheatsheets.git
$ npm install
$ npm start
```

Visit `http://localhost:8000/` to view the app.

At the root of the folder `content`, add the index file for your cheatsheet. Next, create a folder with the same name. Inside your folder you’ll add a `.md` document for each lesson.

Link to the repository from `/content/index.md`.

Final step is to add `force collapse`. Go into `config.js` and add the name of your folder inside `collapsedNav`.

```
"collapsedNav": [
  "/GraphQL-Query-Language",
  "/Composable-Gatsby-Themes"
],
```

## Add Author Component

To add an author component from inside the main file for your cheatsheet, first import the `CheetsheatAuthor` component.

```
import CheatsheetAuthor from '../src/CheatsheetAuthor.js';
```

Then add the component in the same `*.md` file, following this structure.

```
<CheatsheetAuthor
    name="Lauro Silva"
    twitterUrl="https://twitter.com/laurosilvacom"
    githubUrl="https://github.com/laurosilvacom"
    description="Software Engineer"
/>
```

## Questions

- If you see anything wrong or missing, please file an [issue](https://github.com/laurosilvacom/awesomecheatsheets/issues/new).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://laurosilva.com"><img src="https://avatars2.githubusercontent.com/u/57044804?v=4" width="100px;" alt=""/><br /><sub><b>Lauro Silva</b></sub></a><br /><a href="#content-laurosilvacom" title="Content">🖋</a> <a href="https://github.com/laurosilvacom/awesomecheatsheets/commits?author=laurosilvacom" title="Documentation">📖</a> <a href="#maintenance-laurosilvacom" title="Maintenance">🚧</a> <a href="https://github.com/laurosilvacom/awesomecheatsheets/pulls?q=is%3Apr+reviewed-by%3Alaurosilvacom" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://ianjones.us/"><img src="https://avatars2.githubusercontent.com/u/4407263?v=4" width="100px;" alt=""/><br /><sub><b>Ian Jones</b></sub></a><br /><a href="#content-theianjones" title="Content">🖋</a> <a href="#ideas-theianjones" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/nikkilr88"><img src="https://avatars3.githubusercontent.com/u/24983331?v=4" width="100px;" alt=""/><br /><sub><b>Nikki L.R.</b></sub></a><br /><a href="#content-nikkilr88" title="Content">🖋</a></td>
    <td align="center"><a href="https://zacjones.io"><img src="https://avatars2.githubusercontent.com/u/6188161?v=4" width="100px;" alt=""/><br /><sub><b>Zac Jones</b></sub></a><br /><a href="#content-zacjones93" title="Content">🖋</a> <a href="#ideas-zacjones93" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
