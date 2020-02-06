---
title: "Render and optimize immutable data in React"
metaTitle: "Render and optimize immutable data in React"
metaDescription: "With Structural sharing, we can reuse all the pieces of the previous state that didn't change at all when we produce the next state."
---

## 04. Render Immutable Data using React

[Video](https://egghead.io/lessons/react-render-immutable-data-using-react)

functions for updating objects with immer 'just work' with react state - state is just an object.

adds an `getInitialState` function that sets the initial state as seen in the object below:

    export function getInitialState() {
      return {
        users: allUsers,
        currentUser: getCurrentUser(),
        gifts: defaultGifts
      }
    }

using `useState` to update react state.

    // importing functions we defined earlier to use with State hooks
    import { getInitialState, addGift, toggleReservation } from "./gifts"


    function GiftList() {
      const [state, setState] = useState(() => getInitialState())
      const { users, gifts, currentUser } = state

      const handleAdd = () => {
        const description = prompt("Gift to add")
        if (description)
          setState(state => addGift(state, uuidv4(), description, "https://picsum.photos/200?q=" + Math.random()))
      }

      const handleReserve = id => {
        setState(state => toggleReservation(state, id))
      }
    // with jsx rendered below
    ...
    }

you now have immutable state updates with `setState` using `addGift` and `toggleReservation`

---

## 05. Profile React Rendering and Optimize with memo to Leverage Structural Sharing

[Video](https://egghead.io/lessons/react-profile-react-rendering-and-optimize-with-memo-to-leverage-structural-sharing)

Since parts of the state tree that haven’t changed compared to the previous state, are shared, we can optimize. This lesson uses the “**memo**” and “**useCallbac**k” functions from React to benefit from structural sharing.

**Structural sharing - we can reuse all the pieces of the previous state that didn't change at all when we produce the next state**

because we have **Structural sharing, we can leverage that to optimize rerenders in react**

[1:52](https://egghead.io/lessons/react-profile-react-rendering-and-optimize-with-memo-to-leverage-structural-sharing) This is quite a common React problem if you are unaware of that, but there's an easy React-specific fix for that. It's using **useCallback**. It doesn't relate to this course, but for completeness sake, I wanted to share how to fix this, and that is **by making sure that this** **handleReserve callback keeps being reused by using useCallback.**

    **const handleReserve = useCallback(id => {
        setState(state => toggleReservation(state, id))
      }, [])**

Just using `useCallback` isn't enough, the parent component re-rendered so by default React will re-render all the children.

we can use `memo` to fix this.

    const Gift = memo(({ gift, users, currentUser, onReserve }) => (
      ...
    ))

3:35 I hope that clarifies one of the benefits of immutability combined with structural sharing. It guarantees us that we can just do a simple reference equality check when rendering components to see if it's needed or not.
