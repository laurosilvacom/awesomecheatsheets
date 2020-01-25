---
title: "03. Query an Enumeration Type with GraphQL"
metaTitle: "03. Query an Enumeration Type with GraphQL"
metaDescription: "Learn how to Query an enumeration type with GraphQL."
---

[Video Link](https://egghead.io/lessons/graphql-query-an-enumeration-type-with-graphql)

## Summary

We'll query an enum field, category, in this lesson to find out the different pet categories. This lesson also takes a look at the GraphQL schema for the API.

## Notes

When we're using GraphQL Playground, we can hit `CTRL+SPACE`. This will surface all of the different fields that are available on this query.

Add `category` to our query. When clicking play, you should see category being returned.

```graphql
query {
  allPets {
    name
    weight
    category
  }
  totalPets
}
```

GraphQL is a query language for your API, but it's also a **type system** for your API.

The GraphQL spec describes a schema definition language, which we'll use to define all of the different queries and all of the different types that are available on this API.

If you click the schema tab, you can take a look at this schema.

![alt text](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1563555708/transcript-images/query-an-enumeration-type-with-graphql-schema-tab.png)

`petCategory` is an enumeration type that represents a restricted list of options for this field.

## Personal Take

**🔥Tip**: You can hover over one of these field names and press _command_. This will allow you to click on that field, and it'll take you directly to that field definition in the schema.

## Resources

- [Enumeration types (official website)](https://graphql.org/learn/schema/#enumeration-types)
