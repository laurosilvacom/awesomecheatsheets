---
title: "10. Use an Input Type to Create an Account with a GraphQL Mutation"
metaTitle: "10. Use an Input Type to Create an Account with a GraphQL Mutation"
metaDescription: "Use an input Type to create an account with a GraphQL mutation"
---

[Video Link](https://egghead.io/lessons/graphql-use-an-input-type-to-create-an-account-with-a-graphql-mutation)

## Summary

In this lesson, we will send mutations to register new users.

## Notes

To change data with GraphQL, we use a mutation. These are named just like queries and the schema. Within the schema, we have a mutation called `createAccount`. Let's write that mutation.

We're going to use the `mutation` keyword. We're going to use the name of the mutation `createAccount`. It looks it takes in something called an input, which is `createAccount` input.

```graphql
mutation {
  createAccount
}
```

If we scroll down a little bit and click on the input, we're going to see that `createAccount` is actually a wrapper around name, user name, and password.

Every time I create an account, I'm going to need to provide those things.

Now here's where the input comes in handy. Instead of sending all of these variables one at a time, I can wrap them in the input, and then I can send them as one thing.

Here I am going to use the `input`, and I am going to pass in the `input` as a variable. We'll set this up at the top. Input is of type `CreateAccountInput`, and is non-nullable. We'll use the exclamation point. We'll set up this argument to take in the input.

```graphql
mutation ($input: CreateAccountInput!) {
  createAccount(input: $input) {}
}
```

I'll use the query variables panel to pass in these variables, but this time we are going to put everything on that `input` key. We're going to nest in object here with `name`, with `username`, and with `password`. Now that I have these input values defined, I need to return something from this mutation.

```graphql
{
 "input": {
   "name": "Eve Porcello",
   "username": "ep123",
   "password": "pass"
 }
}
```

What this mutation returns is a customer object. This will give us access to all of the fields on the customer. Whenever I create my account, it's going to echo back those account details that I provided in the input. We'll ask for `username` and `name`.

When we send this mutation, we're going to send all of the values from the input object. We're going to get back the `username` and the `name` for the customer that's just been created.

`CreateAccount` takes in an `input` called `createAccountInput`. We pass the variables in the query variables panel, and then the mutation returns a customer object so I can access those values that I've just supplied.

![](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1563555710/transcript-images/egghead-use-an-input-type-to-create-an-account-with-a-graphql-mutation-account-info-returned.png)

## Personal Take

One particular type of mutation is operations that change users, like signing up a new user. While you can implement this using GraphQL mutations, you can reuse many existing libraries if you learn about GraphQL with authentication and Express middleware.

## Resources

- [Mutations and Input Types (official website)](https://graphql.org/graphql-js/mutations-and-input-types/)
