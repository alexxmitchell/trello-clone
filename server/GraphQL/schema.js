const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    name: String!
    token: String
    boards: [Board]!
  }

  type Board {
    id: ID!
    type: String!
    lists: [List]!
  }

  type List {
    name: String!
    cards: [Card]!
  }

  type Card {
    description: String
    activity: String
    position: Int
  }
  type Query {
    board(id: ID!): Board
    profile: User
  }

  type Mutation {
    login(email: String, password: String): User
  }
`

module.exports = typeDefs;