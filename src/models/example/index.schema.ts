import { buildSchema } from 'graphql';

export const typeDefs = [`
type Query {
  hello: String
}

schema {
  query: Query
}
`];