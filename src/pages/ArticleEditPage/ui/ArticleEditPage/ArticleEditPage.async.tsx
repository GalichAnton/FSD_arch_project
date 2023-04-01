import { lazy } from 'react'

export const ArticleEditPageAsync =
  lazy(async () => await import(/* webpackChunkName: "ArticleEditPageAsync" */'./ArticleEditPage')
    .then(module => ({ default: module.ArticleEditPage })))
