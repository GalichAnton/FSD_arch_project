import { type EntityState } from '@reduxjs/toolkit'
import { type Article, type ArticleView } from 'entity/Article'

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string

  view: ArticleView
}
