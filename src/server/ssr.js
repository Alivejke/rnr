/**
 * React Starter Kit for Firebase
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

/* @flow */

import qs from 'query-string';
import serialize from 'serialize-javascript';
import { Router } from 'express';

import config from './config';
import templates from './templates';
import routes from '../router';
import createRelay from './createRelay';
import stats from './stats.json'; // eslint-disable-line

const router = new Router();

// Static assets are supposed to be served via CDN.
router.get('/static/*', (req, res) => {
  res.status(404);
  res.type('text/plain');
  res.send('Not found');
});

router.get('*', async (req, res, next) => {
  try {
    const { path: pathname, originalUrl: url } = req;
    const relay = createRelay(req);

    // Prefer using the same query string parser in both
    // browser and Node.js environments
    const search = url.includes('?') ? url.substr(url.indexOf('?') + 1) : '';
    const query = qs.parse(search);

    // Resolves a route matching the provided URL path (location)
    const route = await routes.resolve({ pathname, query, relay, config });

    if (route.redirect) {
      res.redirect(route.status || 302, route.redirect);
      return;
    }

    res.send(
      templates.ok({
        url: `${process.env.APP_ORIGIN}${req.path}`,
        title: route.title,
        description: route.description,
        assets: (route.chunks || []).reduce(
          (acc, name) => [...acc, ...[].concat(stats.assetsByChunkName[name])],
          stats.entrypoints.main.assets,
        ),
        data: serialize(route.payload, { isJSON: true }),
        config: JSON.stringify(config),
        env: process.env,
      }),
    );
  } catch (err) {
    next(err);
  }
});

export default router;
