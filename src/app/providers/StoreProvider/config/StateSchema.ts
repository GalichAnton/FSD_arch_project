import { type AnyAction, type EnhancedStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type ArticleDetailsSchema } from 'entity/Article'
import { type CounterSchema } from 'entity/Counter'
import { type ProfileSchema } from 'entity/Profile'
import { type UserSchema } from 'entity/User'
import { type AddCommentFormSchema } from 'features/addCommentForm'
import { type LoginSchema } from 'features/AurhByUserName'
import { type UISchema } from 'features/UI'
import { type ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage'
import { type ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage/model/types'
import { type ArticlesPageSchema } from 'pages/ArticlesPage/model/types/articlesPageSchema'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  ui: UISchema

  // async
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlesPageSchema
  articleDetailsPage?: ArticleDetailsPageSchema
}

export type StateSchemaKeys = keyof StateSchema
export type MountedReducers = OptionalRecord<StateSchemaKeys, boolean>

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => StateSchema
  add: (key: StateSchemaKeys, reducer: Reducer) => void
  remove: (key: StateSchemaKeys) => void
  // true - вмонтирован, false - демонтирован
  getMountedReducers: () => MountedReducers
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
