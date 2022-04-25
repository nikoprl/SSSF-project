import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    recipe(id: ID!): Recipe
    recipes: [Recipe]
  }

  extend type Mutation {
    addRecipe(
      title: String!
      description: String!
      ingredients: [String]!
      time: String!
      author: String!
    ): Recipe
  }

  type Recipe {
    id: ID
    title: String
    description: String
    ingredients: [String]
    time: String
    author: String
  }
`;
