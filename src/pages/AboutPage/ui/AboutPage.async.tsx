import { lazy } from 'react';

export const AboutPageAsync = lazy(
  async () =>
    await import(/* webpackChunkName: "AboutPageAsync" */ './AboutPage').then(
      (module) => ({ default: module.AboutPage }),
    ),
);
