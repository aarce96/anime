const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    description: [Description]
  }

  type Description {
    _id: ID
    descriptionText: String
    createdAt: String
    username: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    descriptions(username: String): [Description]
    description(_id: ID!): Description
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addDescription(descriptionText: String!): Description
  }
`;

module.exports = typeDefs;