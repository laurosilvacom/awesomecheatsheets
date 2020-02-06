---
title: "Return new state and Prevent unwanted returns"
metaTitle: "Return new state and Prevent unwanted returns"
metaDescription: "An Immer producer should modify the draft, or it should return an entirely new state, but it should never do both."
---

## 09. Return Completely New State from an Immer Producer

[Video](https://egghead.io/lessons/react-return-completely-new-state-from-an-immer-producer)

Occasionally, you might want to **write a producer that doesn’t change the draft**, but rather **returns a completely new data set**. This can be achieved by using the **return** keyword.

e.g. a reset button

You need to modify the original argument.

    // immer makes this easy, just `return`
    const handleReset = () => {
        updateState(draft => {
          return getInitialState()
        })
      }

## 10. Avoid Accidental Returns of New State by using the void Keyword

[Video](https://egghead.io/lessons/react-avoid-accidental-returns-of-new-state-by-using-the-void-keyword)

A producer should always do either of two things. **Either it should modify the draft, or it should return an entirely new state, but it should never do both.**

Your application will horribly crash if you do both.

if you have a function like `Array.push` that you want to use a 1-liner, it will always return the length of the array. But this breaks immer.

**use `void` to stop `Array.push` from returning a value.** it will now return undefined.

    updateState(
            draft =>
              void draft.gifts.push({
                id: uuidv4(),
                description,
                image: `https://picsum.photos/id/${Math.round(Math.random() * 1000)}/200/200`,
                reservedBy: undefined
              })
          )
