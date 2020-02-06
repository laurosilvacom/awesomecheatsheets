---
title: "Update Immutable State with React useReducer through Immer"
metaTitle: "Update Immutable State with React useReducer through Immer"
metaDescription: "You can use useReducer like functions with Immer!"
---

## 13. Update Immutable State with React useReducer through Immer

[Video](https://egghead.io/lessons/react-update-immutable-state-with-react-usereducer-through-immer)

Using Immer for reducers has become so popular that even React starter kits and the standardized React boilerplates both ship by default Immer to write to users in a more straightforward way.

---

Immer will support redux-esque reducers if that is your hearts desire.

You simply add all your `produce` logic into 1 producer function.

e.g.

    export const giftsReducer = produce((draft, action) => {
      switch (action.type) {
        case "ADD_GIFT":
          const { id, description, image } = action
          draft.gifts.push({
            id,
            description,
            image,
            reservedBy: undefined
          })
          break
        case "TOGGLE_RESERVATION":
          const gift = draft.gifts.find(gift => gift.id === action.id)
          gift.reservedBy =
            gift.reservedBy === undefined
              ? draft.currentUser.id
              : gift.reservedBy === draft.currentUser.id
              ? undefined
              : gift.reservedBy
          break
        case "ADD_BOOK":
          const { book } = action
          draft.gifts.push({
            id: book.isbn,
            description: book.title,
            image: book.cover.medium,
            reservedBy: undefined
          })
          break
        case "RESET":
          return getInitialState()
      }
    })

Your react code will dispatch actions like you normally do when working with producers.

    const handleAdd = () => {
        const description = prompt("Gift to add")
        if (description)
          dispatch({
            type: "ADD_GIFT",
            id: uuidv4(),
            description,
            image: `https://picsum.photos/id/${Math.round(Math.random() * 1000)}/200/200`
          })
      }
