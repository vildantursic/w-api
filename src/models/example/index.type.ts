import {
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql';

import { Example } from '../../data/example';

const ExampleType = new GraphQLObjectType({
  name: 'Example',
  description: 'This represent an example',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLString)},
    name: {type: new GraphQLNonNull(GraphQLString)},
    text: {type: GraphQLString}
  })
});

export const ExampleRootType = new GraphQLObjectType({
  name: 'ExampleAppSchema',
  description: 'Example Application Schema Root',
  fields: () => ({
    examples: {
      type: new GraphQLList(ExampleType),
      description: 'List of all Examples',
      resolve: function() {
        return Example;
      }
    }
  })
});
