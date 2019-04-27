/**
 * React Starter Kit for Firebase
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

/* @flow */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  content: {
    ...theme.mixins.content,
  },
});

function Home({ classes: s }) {
  return (
    <>
      <div className={s.content}>
        <Typography className={s.title} variant="h4" gutterBottom>
          Getting Started
        </Typography>
      </div>
    </>
  );
}

export default withStyles(styles)(Home);
