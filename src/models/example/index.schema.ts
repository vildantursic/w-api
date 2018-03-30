import { GraphQLSchema } from 'graphql';
import { ExampleRootType } from './index.type';

export const ExampleSchema = new GraphQLSchema({
  query: ExampleRootType
});
