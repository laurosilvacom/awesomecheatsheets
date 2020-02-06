---
title: "Immutable JavaScript Data Structures with Immer Course"
metaTitle: "Immutable JavaScript Data Structures with Immer | Awesome Cheatsheets"
metaDescription: "Awesome cheatsheet for the Immutable JavaScript Data Structures with Immer course"
---

import CheatsheetAuthor from '../src/CheatsheetAuthor.js';

These notes are intended to be used and studied in tandem with Michel Weststrate's [Immutable JavaScript Data Structures with Immer](https://egghead.io/courses/immutable-javascript-data-structures-with-immer) self-paced workshop.

Some question(s) are outlined in the essential questions section of the README for you to think about as you take the workshop. There is no 'definitive' answer to these questions but as you learn, you'll develop a more contextualized answer.

Right below is the intended outcomes of the course, these are the skills and knowledge you will learn that you can take to any application to use.

## Essential Questions

    How does immutable data help develop applications?

## Outcomes:

    Know how to update deep data structures with Immer

    How to apply Immer automatically by using currying

    How to use Immer along with Typescript

    Detect and distribute changes in data (server communication, redo, etc).

    Use Immer in Async Processes

    Configure Immer

## 01. Overview

[Video](https://egghead.io/lessons/react-introduction-to-the-in-depth-immer-course)

How does Immer make tracing state over time easy? How does it simplify state manipulation?

What are Immer patches?

---

Using immutable data to store state has many interesting benefits. **Immutable data makes it easy to trace state over time.** It **can be distributed easily**, and by leveraging structural sharing we can **leverage optimization techniques such as memoization.**

In this course we will build a multi user gift-list, in which we will discover how **using immer doesn’t just significantly simplifies our state manipulation code. It also provides us with very useful tools such as patches that can help us to distribute changes**, build undo/ redo, etc.

## Contribute

These are community notes that I hope everyone who studies benefits from. If you notice areas that could be improved please feel free to open a PR!

## Cheatsheet by

<CheatsheetAuthor 
    name="Zac Jones"
    twitterUrl="https://twitter.com/zacjones93/"
    githubUrl="https://github.com/zacjones93"
/>
