import { type EntityState } from '@reduxjs/toolkit'

import { type Comment } from '@/entity/Comment'

export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
  isLoading?: boolean
  error?: string
}
