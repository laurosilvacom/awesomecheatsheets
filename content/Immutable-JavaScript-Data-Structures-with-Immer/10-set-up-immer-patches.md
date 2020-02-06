---
title: "Set up Immer Patches"
metaTitle: "Set up Immer Patches"
metaDescription: "patches describe the minimal difference between two versions of the state."
---

## 14. Capture Patches to Distribute Changes in App State with Immer produceWithPatches

[Video](https://egghead.io/lessons/react-capture-patches-to-distribute-changes-in-app-state-with-immer-producewithpatches)

**patches - describe the minimal difference between two versions of the state.**

how one state can be changed with minimal amount of changes to get to the next state, like a commit in git

use-case: real-time synchronization

immer exposes the patches api through `produceWithPatches`

---

[1:16](https://egghead.io/lessons/react-capture-patches-to-distribute-changes-in-app-state-with-immer-producewithpatches) A **normal producer always produces a next state**, but a **producer with patches doesn't return just next state**. No, **it returns it tuple**. That **tuple consists of the next state and the patches that got to that state and the inverse patches that describe how to get back to the previous state.**

[2:15](https://egghead.io/lessons/react-capture-patches-to-distribute-changes-in-app-state-with-immer-producewithpatches) Patches describes **what operation happens** like, **remove** or **add** or **replace** a value. It **describes at what stuff the change happens** so risen from the roots that is, add this property, add first index, reserve property change and what did it changes to? It changes to the value one.

    {
    	op: "replace"
    	path: ["gifts", 1, "reservedBy"],
    	value: 1
    }

Way more efficient to communicate with a server using patches then the whole state

Access patches using the below code, it _Just Works_ and now you have access to individual patches in your state

    // `produceWithPatches` wraps our current recipe reducer
    export const patchGeneratingGiftsReducer = produceWithPatches(giftsRecipe)

    // In GiftList we now just call the wrapped reducer
    const dispatch = useCallback(action => {
        setState(currentState => {
          const [nextState, patches] = patchGeneratingGiftsReducer(currentState, action)
          console.log(patches)
          return nextState
        })
      }, [])

## 15. Create a Simple WebSocket Server to Distribute Patches from Immer

[Video](https://egghead.io/lessons/react-create-a-simple-websocket-server-to-distribute-patches-from-immer)

This course isn't really about immer but WebSocket. It will enable us to synchronize state across clients with patches.

When a client connects, whenever an action is made on that client, **it will also send that action (or patch) to the server. The server will be listening for the patch and distribute it to all other connected clients** - thus synchronizing state

    ws.on("message", function incoming(message) {
        console.log(message)
        history.push(...JSON.parse(message))
        connections
          .filter(client => client !== ws)
          .forEach(client => {
            client.send(message)
          })
      })

You send messages with `useSocket` - not the focus of the lesson.

## 16. Apply Patches using Immer applyPatches to Synchronize State across Clients

[Video](https://egghead.io/lessons/react-apply-patches-using-immer-applypatches-to-synchronize-state-across-clients)

Now that we are receiving patches from the server, we have to apply them. Immer lets us apply patches with the `applyPatches` api

If using a reducer - it's as easy as adding a case:

    case "APPLY_PATCHES":
          return applyPatches(draft, action.patches)

which is being called when messages are being received

using the giftsReducer directly because we don't need patches for the update (already have them)

    const send = useSocket("ws://localhost:5001", function onMessage(patches) {
        // we received some patches
        setState(state => giftsReducer(state, { type: "APPLY_PATCHES", patches }))
      })

## 17. Create Stable Patches in Immer by updating with Id instead of Indices

[Video](https://egghead.io/lessons/react-create-stable-patches-in-immer-by-updating-with-id-instead-of-indices)

Our naive synchronization implementation has some flaws. In this lesson we are going to address one of them, by **changing our index-based storage to key based storage**, which enables us to better deal with synchronization issues.

network latency could mess with where the items show up in a list for real-time sync. When we use index-based storage, the clients will think each item is the same still.

**use ID's as much as possible**

refactor from an array to a collection of objects where the id is the key.

    case "ADD_GIFT":
          const { id, description, image } = action
          draft.gifts[id] = {
            id,
            description,
            image,
            reservedBy: undefined
          }

## 18. Compress the Immer Patch History by Replaying Patches on a setInterval

[Video](https://egghead.io/lessons/react-compress-the-immer-patch-history-by-replaying-patches-on-a-setinterval)

The history on the server is ever and ever growing since we are just pushing onto an array each patch that is received.

That can be fixed by compressing patches by **replaying and re-recording them so that we end up with the least amount of patches to end up in the correct final state.**

The idea of this approach is that at a certain form, we **reapply all the patches we have so far to the original state we started with, and then we check what new patches this reapplication would result in**. Because patches are computers' after effect, which results in a smaller set of patches.

**This will remove the redundant patches in the history.**

    export function compressHistory(currentPatches) {
      console.log("COMPRESSING HISTORY")
      const [_finalState, patches] = produceWithPatches(initialState, draft => {
        return applyPatches(draft, currentPatches)
      })
      console.log(`compressed patches from ${history.length} to ${patches.length} patches`)
      console.log(JSON.stringify(patches, null, 2))
      return patches
    }
