/**
 * Application settings to be used in the React app that will be
 * available on the context. For example:
 *
 *   import { useConfig } from '../hooks';
 *
 *   function Title() {
 *     const { app } = useConfig();
 *     return (<a href={app.origin}>{app.name}</a>);
 *   }
 *
 * IMPORTANT NOTE: Do not include any sensitive data into this file!
 */
export default {
  // Core application settings
  app: {
    name: process.env.APP_NAME,
    description: process.env.APP_DESCRIPTION,
    origin: process.env.APP_ORIGIN,
    version: process.env.APP_VERSION,
    env: process.env.APP_ENV,
  },

  // Firebase
  // https://firebase.google.com/docs/web/setup
  firebase: {
    projectId: process.env.GCP_PROJECT,
    authDomain: process.env.APP_ORIGIN.startsWith('http://localhost')
      ? `${process.env.GCP_PROJECT}.firebaseapp.com`
      : process.env.APP_ORIGIN.replace(/^https?:\/\//, ''),
    apiKey: process.env.GCP_BROWSER_KEY,
  },

  // Analytics
  gaTrackingId: process.env.GA_TRACKING_ID,
};
