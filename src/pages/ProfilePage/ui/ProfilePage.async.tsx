import { lazy } from 'react';

export const ProfilePageAsync = lazy(
  async () =>
    await import(
      /* webpackChunkName: "ProfilePageAsync" */ './ProfilePage'
    ).then((module) => ({ default: module.ProfilePage })),
);
