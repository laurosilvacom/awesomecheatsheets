---
title: "11. Authenticate a User with a GraphQL Mutation"
metaTitle: "11. Authenticate a User with a GraphQL Mutation"
metaDescription: "Learn how to use a mutation to authenticate a user with their username and password."
---

[Video Link](https://egghead.io/lessons/graphql-authenticate-a-user-with-a-graphql-mutation)

# 11. Authenticate a User with a GraphQL Mutation

In this lesson we learn how to authenticate a user using mutations. Mutations let you invoke backend functions from the client.

```graphql
mutation {
  logIn(username: "ep123", password: "pass")
}
```

A type `LogInPayload` is returned from the `logIn` mutation. This is a custom object that returns both a customer and user token. We can use the token to validate that the user is authorized.

When we send the `logIn` mutation, we have access to the customer details and token.

```graphql
mutation {
  logIn(username: "ep123", password: "pass") {
    customer {
      name
    }
    token
  }
}
```

Once we provide the token in the HTTP headers, we are able to send queries that are only for authorized users.

![alt text](https://i.ibb.co/ZxCrLvc/scrnli-1-23-2020-6-04-46-PM.png)

Now we are able to make the query `me`, and get back data for the logged in user.

```graphql
query me {
  me {
    name
  }
}
```

![alt text](https://i.ibb.co/F3t6RpH/scrnli-1-23-2020-6-05-11-PM.png)

## Resources

- [Mutations (official website)](https://graphql.org/learn/queries/#mutations)
