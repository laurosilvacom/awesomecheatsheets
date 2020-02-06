---
title: "Write Asynchronous Producers in Immer and Why You Shouldn’t"
metaTitle: "Write Asynchronous Producers in Immer and Why You Shouldn’t"
metaDescription: "produce directly supports async code so you won't have to directly use createDraft and finishDraft"
---

## 11. Write Asynchronous Producers in Immer and Why You Shouldn’t

[Video](https://egghead.io/lessons/react-write-asynchronous-producers-in-immer-and-why-you-shouldn-t)

You can use async producers in Immer but you really shouldn't. If you can split up the async code from state updaters, you should.

---

`**createDraft` and `finishDraft` are Immer APIs for async producers\*\*

A use case for this is when you need to fetch data and update state.

    export async function addBook(state, isbn) {
    	const draft = createDraft(state)
    	const response = await fetch(`http://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`, {
        mode: "cors"
    	 })

      const book = (await response.json())["ISBN:" + isbn]
      draft.gifts.push({
    		id: isbn,
    		description: book.title,
    		image: book.cover.medium,
    		reservedBy: undefined
    	})
    	return finishDraft(draft)
    }

`**produce` directly supports async code so you won't have to directly use `createDraft` and `finishDraft`\*\*

The low level api is if you are building a library with immer.

    // 💥 THIS IS BAD, DON'T DO THIS 💥
    export addBook = produce(async (draft, isbn) => {
    	const response = await fetch(`http://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`, {
        mode: "cors"
    	 })

      const book = (await response.json())["ISBN:" + isbn]
      draft.gifts.push({
    		id: isbn,
    		description: book.title,
    		image: book.cover.medium,
    		reservedBy: undefined
    	})
    }

async producers might have multiple promises kicked off.. which state do you resolve first.

**Split the async logic and the updating logic**

    export async function getBookDetails(isbn) {
      const response = await fetch(`http://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`, {
        mode: "cors"
      })
      const book = (await response.json())["ISBN:" + isbn]
      return book
    }

    export const addBook = produce((draft, book) => {
      draft.gifts.push({
        id: book.isbn,
        description: book.title,
        image: book.cover.medium,
        reservedBy: undefined
      })
    })

    // In GiftList component
    const handleAddBook = async () => {
        const isbn = prompt("Enter ISBN number", "0201558025")
        if (isbn) {
          const details = await getBookDetails(isbn)
          setState(state => addBook(state, details))
        }
      }
