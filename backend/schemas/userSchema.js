import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    user(id: ID!): User
    userByName(username: String!): User
    login(username: String!, password: String!): User
  }

  extend type Mutation {
    registerUser(username: String!, password: String!): User
  }

  type User {
    id: ID
    username: String
    password: String
    token: String
  }
`;
