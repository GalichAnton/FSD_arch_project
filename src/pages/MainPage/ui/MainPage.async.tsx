import { lazy } from 'react'

export const MainPageAsync = lazy(async () => await import(/* webpackChunkName: "MainPageAsync" */'./MainPage')
  .then(module => ({ default: module.MainPage })))
