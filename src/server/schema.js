/**
 * React Starter Kit for Firebase
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

/* @flow */

import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import * as userQueries from './user/queries';
import * as userMutations from './user/mutations';
import { nodeField, nodesField } from './Node';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      node: nodeField,
      nodes: nodesField,
      ...userQueries,
    },
  }),

  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      ...userMutations,
    },
  }),
});
