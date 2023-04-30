import { lazy } from 'react'

export const AdminPanelPageAsync = lazy(async () =>
  await import(/* webpackChunkName: "AdminPanelPageAsync" */'./AdminPanelPage')
    .then(module => ({ default: module.AdminPanelPage })))
