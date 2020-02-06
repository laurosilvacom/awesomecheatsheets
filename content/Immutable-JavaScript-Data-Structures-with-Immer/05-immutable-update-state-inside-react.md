---
title: "Immutable Update State inside React components with useImmer"
metaTitle: "Immutable Update State inside React components with useImmer"
metaDescription: "`useImmer` is a custom hook that lets you call a state updater function without explicitly having to apply `produce` to the call as well. The hook does it for you."
---

## 08. Immutable Update State inside React components with useImmer

[Video](https://egghead.io/lessons/react-immutable-update-state-inside-react-components-with-useimmer)

`useImmer` is a custom hook that lets you call a state updater function without explicitly having to apply `produce` to the call as well. The hook does it for you.

---

You can use immer directly inside React components if you want to.

    setState(
    	produce(draft => {
    	  draft.gifts.push({
    	    id: uuidv4(),
    	    description,
    	    image: `https://picsum.photos/id/${Math.round(Math.random() * 1000)}/200/200`,
    	    reservedBy: undefined
    	  })
    }))


    setState(
    	produce(draft => {
    	  const gift = draft.gifts.find(gift => gift.id === id)
    	  gift.reservedBy =
    	    gift.reservedBy === undefined
    	      ? draft.currentUser.id
    	      : gift.reservedBy === draft.currentUser.id
    	      ? undefined
    	      : gift.reservedBy
    }))

Theres a repeating pattern again of `setState(produce(draft ⇒` which calls for simplification.

this time you can import a package `useImmer` that exports a hook.

    import { useImmer } from "use-immer"

    function GiftList() {
    	const [state, updateState] = useImmer(() => getInitialState())
    	const { users, gifts, currentUser } = state

    	const handleAdd = () => {
    	    const description = prompt("Gift to add")
    	    if (description)
    	      updateState(draft => {
    	        draft.gifts.push({
    	          id: uuidv4(),
    	          description,
    	          image: `https://picsum.photos/id/${Math.round(Math.random() * 1000)}/200/200`,
    	          reservedBy: undefined
    	        })
    	      })
    	  }
    ...
    }
