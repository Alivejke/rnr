/**
 * React Starter Kit for Firebase
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

/* @flow */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  '@global': {
    'html, body, #root': {
      height: '100%',
    },
    body: {
      padding: 0,
      margin: 0,
      backgroundColor: theme.palette.background.default,
    },
  },
});

function Layout({ classes: s, hero, data, children }) {
  return <>{children}</>;
}

export default withStyles(styles)(Layout);
