---
title: "08. Query Connected Data with the GraphQL Query Language"
metaTitle: "08. Query Connected Data with the GraphQL Query Language"
metaDescription: "Learn how to query connected data with the GraphQL query language"
---

[Video Link](https://egghead.io/lessons/graphql-query-connected-data-with-the-graphql-query-language)

## Summary

In this video, we'll look at how to use nested fields to gather data about the Customer type and the Pet type.

## Notes

So far, we've sent queries for the pet type, and if we search the schema for pet, we should see all the available fields. Now, there's another main type that's part of this API, and that's called customer.

The real power of GraphQL starts to show up when we start to talk about connecting data points. Let's write some queries that connect the pet type with the customer type. The query that we'll send is `petById`.

```graphql
query {
  petById(id: "C-1") {
    name
  }
}
```

![](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1563555708/transcript-images/query-connected-data-with-the-graphql-query-language-pet-by-id.png)

There's another field on pet called `inCareOf`. `inCareOf` is going to return the customer who has checked out this pet. Biscuit has been checked out by this customer.

```graphql
query {
  petById(id: "C-1") {
    name
    inCareOf {
      name
      username
    }
  }
}
```

![](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1563555708/transcript-images/query-connected-data-with-the-graphql-query-language-customer-info.png)

To draw the line from customer to pet, we're going to use the `allCustomers` query. `allCustomers` is going to return a list of customers, so we can ask for their name, their username, and we also are going to get their `currentPets`.

```graphql
query {
  allCustomers {
    name
    username
    currentPets {
      name
    }
  }
}
```

`currentPets` is going to return a list of any pets that they currently have checked out. That connection is made on the currentPets field. `allCustomers` returns a list of customers for each of those customer objects that are going to have a list of current pets that are checked out.

This could be an empty array, or this could return a list of custom objects. To go back the other way, `inCareOf` is going to connect a pet with a customer. On the `inCareOf` field, we're going to return the customer who has checked out this pet.

## Personal Take

GraphQL is designed in a way that allows you to write clean code on the server, where every field on every type has a focused single-purpose function for resolving that value. However without additional consideration, a naive GraphQL service could be very "chatty" or repeatedly load data from your databases.

This is commonly solved by a batching technique, where multiple requests for data from a backend are collected over a short period of time and then dispatched in a single request to an underlying database or microservice by using a tool like Facebook's DataLoader.

## Resources

- [Variables (official website)](https://graphql.org/learn/queries/#variables)
