import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from 'entity/User'
import { getArticleDetailsData } from 'entity/Article'

export const getCanEditArticle = createSelector(
  getArticleDetailsData,
  getUserAuthData,
  (article, user) => {
    if (!article || !user) {
      return false
    }

    return article.user.id === user.id
  },
)
