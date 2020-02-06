---
title: "Simplify Immer Producer Functions using Currying"
metaTitle: "Simplify Immer Producer Functions using Currying"
metaDescription: "We can use patterns like currying in JavaScript to simplify our Producer functions."
---

## 06. Simplify Immer Producer Functions using Currying

[Video](https://egghead.io/lessons/javascript-simplify-immer-producer-functions-using-currying)

Currying is a functional programming pattern that Immer takes advantage of to simplify the boilerplate when using produce. You can separate the arguments into individual functions that receive each argument one at a time and this allows you to eliminate your reference to state.

---

There is a repeated pattern in the produce function right now. It accepts state and the recipe function.

**Whenever there is a pattern like** `produce(state, draft =>`**, that usually means we can simplify.**

    export function addGift(state, id, description, image) {
      return produce(state, draft => {
        draft.gifts.push({
          id,
          description,
          image,
          reservedBy: undefined
        })
      })
    }

    export function toggleReservation(state, giftId) {
      return produce(state, draft => {
        const gift = draft.gifts.find(gift => gift.id === giftId)
        gift.reservedBy =
          gift.reservedBy === undefined
            ? state.currentUser.id
            : gift.reservedBy === state.currentUser.id
            ? undefined
            : gift.reservedBy
      })
    }

In this case, we can use currying to do so.

instead of:

    produce(state, recipe) => nextState

we can structure the function like this:

    produce(recipe) => (state) => nextState

so a real implementation would look like:

`produce` is called at the top level and any previous references to state are changed to `draft`

    export const addGift = produce((draft, id, description, image) => {
    	// this is a 'producer' in immer
      draft.gifts.push({
        id,
        description,
        image,
        reservedBy: undefined
      })
    })

    export const toggleReservation = produce((draft, giftId) => {
      const gift = draft.gifts.find(gift => gift.id === giftId)
      gift.reservedBy =
        gift.reservedBy === undefined
          ? draft.currentUser.id
          : gift.reservedBy === draft.currentUser.id
          ? undefined
          : gift.reservedBy
    })

you can access original state with `original` from immer
