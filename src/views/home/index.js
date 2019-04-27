/**
 * React Starter Kit for Firebase
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

/* @flow */

import React from 'react';
import Layout from '../../components/Layout/Layout';

export default [
  {
    path: '',
    components: () => [import(/* webpackChunkName: 'home' */ './Home')],
    render: ([Home], data, { config }) => ({
      title: config.app.name,
      component: (
        <Layout>
          <Home />
        </Layout>
      ),
      chunks: ['home'],
    }),
  },
];
