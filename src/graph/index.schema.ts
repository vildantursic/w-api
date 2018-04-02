import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Query {
    companies(size: Int!): [Company],
  }
  type Developer {
    name: String,
    surname: String,
    address: String,
  }
  type Company {
    name: String,
    developers(size: Int!): [Developer]
  }
`);