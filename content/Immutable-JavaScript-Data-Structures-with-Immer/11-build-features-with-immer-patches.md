---
title: "Build features with Immer patches"
metaTitle: "Build features with Immer patches"
metaDescription: "With patches and inverse patches, you can build cool functionality like undo and redo"
---

## 19. Use Immer inversePatches to Build Undo Functionality

[Video](https://egghead.io/lessons/react-use-immer-inversepatches-to-build-undo-functionality)

Patches give us a lot of data to build features with. One of those features is Undo. Undo is, like it says, removing the last action that was performed in the application. Essentially reverting to previous state.

**Immer uses inversePatches to move back in state.**

**Inverse Patches - another set of patches which allows us to go from the next state back to our initial state.**

`inversePatches` can be added to a `useRef` so that they are preserved between renders.

    function GiftList() {
      const [state, setState] = useState(() => getInitialState())
    	const undoStack = useRef([])

      const { users, gifts, currentUser } = state

      const dispatch = useCallback((action, undoable = true) => {
        setState(currentState => {
          const [nextState, patches, inversePatches] = patchGeneratingGiftsReducer(currentState, action)
          send(patches) // always send patches
          if (undoable) undoStack.current.push(inversePatches) // store patches if this is undoable
          return nextState
        })
      }, [])
    ...
    }

Pop the patches from the stack and apply them to the current state.

NOTE: when undoing - will need to add a flag to the undo action so that the undo won't apply that action to the undo stack (creating a loop)

## 20. Use Immer Patches to Build Redo Functionality

[Video](https://egghead.io/lessons/react-use-immer-patches-to-build-redo-functionality)

When you need to be able to **go forward and back in the history, you cannot just pop out items from your Undo stack**, because you need to be able to redo that. **Instead of popping items from the stack, we are going to keep a separate pointer to remember where we are in the stack, and we call that Undo stack pointer.**

This `undoStackPointer` will be another React Ref (`useRef`)

    const undoStack = useRef([])
    const undoStackPointer = useRef(-1)

    const dispatch = useCallback((action, undoable = true) => {
        setState(currentState => {
          const [nextState, patches, inversePatches] = patchGeneratingGiftsReducer(currentState, action)
          send(patches) // always send patches
          if (undoable) {
            const pointer = ++undoStackPointer.current
            undoStack.current.length = pointer
            undoStack.current[pointer] = { patches, inversePatches }
          }
          return nextState
        })
      }, [])

This way you can move the pointer forward when you perform a `dispatch` and move the pointer backwards when you are performing an undo.

    const handleUndo = () => {
        if (undoStackPointer.current < 0) return
    		// applies invers patches
        const patches = undoStack.current[undoStackPointer.current].inversePatches
        dispatch({ type: "APPLY_PATCHES", patches }, false)
    		// decrements the pointer
        undoStackPointer.current--
      }

which allows us to implement redo which is essentially the inverse of undo

    const handleRedo = () => {
        if (undoStackPointer.current === undoStack.current.length - 1) return
    		// increments the pointer
        undoStackPointer.current++
    		// applies patches
        const patches = undoStack.current[undoStackPointer.current].patches
        dispatch({ type: "APPLY_PATCHES", patches }, false)
      }
