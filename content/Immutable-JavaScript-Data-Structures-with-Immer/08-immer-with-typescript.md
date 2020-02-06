---
title: "Type Immutable Immer Data with TypeScript"
metaTitle: "Type Immutable Immer Data with TypeScript"
metaDescription: "Because the code put in recipe functions is plain, native, mutable JavaScript code, Immer is naturally suited to be used in conjunction of TypeScript (or Flow)."
---

[Video](https://egghead.io/lessons/react-type-immutable-immer-data-with-typescript)

**Because the code put in recipe functions is plain, native, mutable JavaScript code, Immer is naturally suited to be used in conjunction of TypeScript (or Flow).**

Immer is just functions updating objects, nothing fancy so TypeScript _Just Works_ by defining the objects.

e.g.

    interface Gift {
      readonly id: string
      readonly description: string
      readonly image: string
      readonly reservedBy?: number
    }

**You will get compile errors on all you your recipe functions if you type everything with `readonly` (you should).** This makes sense because recipes are mutable even though the data they refer to is immutable.

Immer provides a utility that will let your recipes be mutable.

e.g.

    export const addGift = produce((draft: Draft<State>, id: string, description: string, image: string) => {
      draft.gifts.push({
        id,
        description,
        image,
        reservedBy: undefined
      })
    })
