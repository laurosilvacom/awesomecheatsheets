---
title: "Problem and Solution for Immutable Updates"
metaTitle: "Problem and Solution for Immutable Updates"
metaDescription: "Capture Application Logic in Pure Functions to Create Immutable State."
---

## 02. Capture Application Logic in Pure Functions to Create Immutable State

[Video](https://egghead.io/lessons/javascript-capture-application-logic-in-pure-functions-to-create-immutable-state)

Maintaining immutability is a pain when you have to spread objects all the way down to the level that you want to update a property.

---

    **const initialState = {
      users: [
        {
          id: 1,
          name: "Test user"
        }
      ]
      gifts: [
        {
          id: "immer_license",
          description: "Immer license",
          image: "https://raw.githubusercontent.com/immerjs/immer/master/images/immer-logo.png",
          reservedBy: 2
        },
        {
          id: "egghead_subscription",
          description: "Egghead.io subscription",
          image: "https://pbs.twimg.com/profile_images/735242324293210112/H8YfgQHP_400x400.jpg",
          reservedBy: undefined
        }
      ]
    }**

[0:58](https://egghead.io/lessons/javascript-capture-application-logic-in-pure-functions-to-create-immutable-state) It is time to add some operations so that we can test them. The first one we are going to add is **the action add a gift**. This will extend the states to add an additional gift to the collection. The second one, a bit more complicated, is to **toggle the reservation of a gift**. We have these two steps. Now let's write some tests that test these operations.

[1:25](https://egghead.io/lessons/javascript-capture-application-logic-in-pure-functions-to-create-immutable-state) In this first test, we are going to produce a new state where one gift was added, a coffee mug. Now, because this course is about immutability, **we will make sure that we add some additional tests that don't just test that the new state produced is correct, but also the old state is not modified.**

[2:10](https://egghead.io/lessons/javascript-capture-application-logic-in-pure-functions-to-create-immutable-state)  We **have to be sure that we don't modify the current state, but rather, produce an entire new state.**

    **export function addGift(state, id, description, image) {
      return {
        ...state,
        gifts: [
          ...state.gifts,
          {
            id,
            description,
            image,
            reservedBy: undefined
          }
        ]
      }
    }**

**That's a lot of object spreading just to add one object but it does work, and it is immutable**

[2:49](https://egghead.io/lessons/javascript-capture-application-logic-in-pure-functions-to-create-immutable-state) Let's implement toggling our reservation. Toggling a reservation is a lot trickier. The reason for is that we have to, based on the ID, **we have to find the correct gift to modify**.

[3:03](https://egghead.io/lessons/javascript-capture-application-logic-in-pure-functions-to-create-immutable-state) One way to express that is by **mapping over all the gifts we have**. We don't have to write one. We just return your original one. **If you found the one we want to modify, we create a new gift and store that original in the collection.**

    **export function toggleReservation(state, giftId) {
      return {
        ...state,
        gifts: state.gifts.map(gift => {
          if (gift.id !== giftId) return gift
          return {
            ...gift,
            reservedBy:
              gift.reservedBy === undefined
                ? state.currentUser.id
                : gift.reservedBy === state.currentUser.id
                ? undefined
                : gift.reservedBy
          }
        })
      }
    }**

**Again, so much work just to make sure we aren't modifying any variables but with immutable updates**

[3:35](https://egghead.io/lessons/javascript-capture-application-logic-in-pure-functions-to-create-immutable-state) Finally, which means that a gift was already reserved by somebody else, we just keep it that way. We save it. Now, all our tests should succeed.

## 03. Simplify Deep State Updates using Immer produce

[Video](https://egghead.io/lessons/javascript-simplify-deep-state-updates-using-immer-produce)

[00:00](https://egghead.io/lessons/javascript-simplify-deep-state-updates-using-immer-produce#t=0) That stuff wasn't easy. If reading back a logic isn't trivial. For example, when you think about what's happening here, in `addGift` is that we're just expressing that we want to add something to our collection. **But instead what we're doing, every object, every parent in that data tree, we generate a new version for that.** For toggling the reservation, it's even worse.

    // soo much spreading..
    **return {
        ...state,
        gifts: [
          ...state.gifts,
    			// just want to add an object to the array..
          {
            id,
            description,
            image,
            reservedBy: undefined
          }
        ]
      }

    // toggleReservation is even worse
    return {
        ...state,
        gifts: state.gifts.map(gift => {
          if (gift.id !== giftId) return gift
          return {
            ...gift,
    				// this is all the work that we want to do 👇
            reservedBy:
              gift.reservedBy === undefined
                ? state.currentUser.id
                : gift.reservedBy === state.currentUser.id
                ? undefined
                : gift.reservedBy
          }
        })
      }**

    // it would be nice if we could just push the value
    return state.gifts.push({})

It's much nicer to write code that is mutable that way you are working with the object itself and don't have so much boiler plate

**This is where Immer comes in. `produce` is the main api you will use with immer.**

    export function addGift(state, id, description, image) {
    	// just .push onto the array and you're good to go
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
    	// all you have to do is `.find` and modify the attribute!
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

[02:04](https://egghead.io/lessons/javascript-simplify-deep-state-updates-using-immer-produce#t=124) The easiest way to think about Immer, is to **see it as your personal secretary. You give it a letter, and it brings you back a copy of the letter. You start scribbling on top of that copy. You are making notes and you're scratching things out and you're making it ugly all over the place.**

[02:23](https://egghead.io/lessons/javascript-simplify-deep-state-updates-using-immer-produce#t=143) It is fine because, what happens is that you give that copy on which you wrote, you give it back to your secretary. Your secretary will check, "You are using these sentences. You are cracking that, and you are scratching this." **Based on what you did with that draft, it will produce for you your nicely next immutable state.**
