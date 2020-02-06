---
title: "Produces Immutable Data and Avoid Unnecessary Creation of New Data Trees with Immer"
metaTitle: "Produces Immutable Data and Avoid Unnecessary Creation of New Data Trees with Immer"
metaDescription: "Immer can automatically freeze all of your data and prevent you from creating new state trees"
---

## 07. Produces Immutable Data and Avoid Unnecessary Creation of New Data Trees with Immer

[Video](https://egghead.io/lessons/javascript-produces-immutable-data-and-avoid-unnecessary-creation-of-new-data-trees-with-immer)

In the immutable data paradigm, it is **quite important that we don’t accidentally change the data** somewhere. **It would break the paradigm** in ways that are very hard to debug.

Immer does the heavy lifting for you so that you don't have to worry about accidentally messing with immutability.

---

**Immer can automatically freeze all data**

**Immer prevents you from creating new state trees**

Freezing all of your data is expensive - immer will automatically turn freezing on when in development and off when in production.

if you weren't using immer, you could:

    nextState.gifts[1].reservedBy = undefined

but immer doesn't let you.
