import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserAuthData } from 'entity/User'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Comment } from 'entity/Comment'
import { getArticleDetailsData } from 'entity/Article/model/selectors/articleDetails'
import {
  fetchCommentsByArticleId,
} from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<
Comment,
string,
ThunkConfig<string>
>(
  'articleDetails/addCommentForArticle',
  async (text, thunkApi) => {
    const {
      extra, dispatch, rejectWithValue, getState,
    } = thunkApi

    const userData = getUserAuthData(getState())
    const article = getArticleDetailsData(getState())

    if (!userData || !text || !article) {
      return rejectWithValue('no data')
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text,
      })

      if (!response.data) {
        throw new Error()
      }

      dispatch(fetchCommentsByArticleId(article.id))

      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  },
)