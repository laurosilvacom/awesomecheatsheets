---
title: "09. Create Operation Names for GraphQL Queries"
metaTitle: "09. Create Operation Names for GraphQL Queries"
metaDescription: "Learn how to create operation names for GraphQL Queries"
---

[Video Link](https://egghead.io/lessons/graphql-create-operation-names-for-graphql-queries)

## Summary

In this lesson, we’ll show how to get around anonymous operation errors with operation names.

## Notes

Right now, on the left-hand side of our screen, we have a huge query. It's collecting a bunch of data about customers and then about pets. GraphQL will let us do this. We can grab information about multiple types in one query, but I want to break this down into two separate queries, one of which will be for pets. The other will be for customers.

As soon as I break this down into two separate queries, we're going to run into an issue. When I click play, there are two unnamed queries.

```graphql
query {
  availablePets: totalPets(status: AVAILABLE)
  checkedOutPets: totalPets(status: CHECKOUT)
  dogs: allPets(category: DOG, status: AVAILABLE) {
    name
    weight
    status
    category
    photo {
      full
      thumb
    }
  }
}

query {
  totalCustomers
  allCustomers {
    name
    username
    dataCreated
    checkoutHistory {
      pet {
        name
      }
      checkOutDate
      checkInDate
      late
    }
  }
}
```

![](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1563555708/transcript-images/create-operation-names-for-graphql-queries-query-error.png)

If I click the second one of these, it says, `"This anonymous operation must be the only defined operation."` If there's more than one query in your query document, you're going to need to give both of these a name.

Right now, these are anonymous queries. Think of those like anonymous functions. We need to give them a name. I'll call the first one, `"PetPage."` I'll call the second one, `"CustomerPage"`.

```graphql
query PetPage {
  availablePets: totalPets(status: AVAILABLE)
  checkedOutPets: totalPets(status: CHECKOUT)
  dogs: allPets(category: DOG, status: AVAILABLE) {
    name
    weight
    status
    category
    photo {
      full
      thumb
    }
  }
}

query CustomerPage {
  totalCustomers
  allCustomers {
    name
    username
    dataCreated
    checkoutHistory {
      pet {
        name
      }
      checkOutDate
      checkInDate
      late
    }
  }
}
```

Now if I select the play button, we'll see the drop-down. We'll also see the operation name, so I can execute these queries one at a time.

![](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1563555709/transcript-images/create-operation-names-for-graphql-queries-query-drop-down.png)

Just to recap, whenever you have more than one query inside of a query document, you need to give it an operation name. The operation name can be whatever you want to call it but conventionally is capitalized.

## Personal Take

In JavaScript we can easily work only with anonymous functions, but when we give a function a name, it's easier to track it down, debug our code, and log when it's called. In the same way, GraphQL query and mutation names, along with fragment names, can be a useful debugging tool on the server side to identify different GraphQL requests.
