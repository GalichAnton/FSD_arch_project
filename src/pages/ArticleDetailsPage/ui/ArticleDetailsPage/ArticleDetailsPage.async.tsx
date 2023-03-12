import { lazy } from 'react'

export const ArticleDetailsPageAsync =
  lazy(async () => await import(/* webpackChunkName: "ArticleDetailsPageAsync" */'./ArticleDetailsPage')
    .then(module => ({ default: module.ArticleDetailsPage })))
