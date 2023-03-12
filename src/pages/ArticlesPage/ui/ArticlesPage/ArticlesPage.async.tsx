import { lazy } from 'react'

export const ArticlesPageAsync =
  lazy(async () => await import(/* webpackChunkName: "ArticlesPageAsync" */'./ArticlesPage')
    .then(module => ({ default: module.ArticlesPage })))
