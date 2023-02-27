import { type AnyAction, type EnhancedStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type CounterSchema } from 'entity/Counter'
import { type ProfileSchema } from 'entity/Profile'
import { type UserSchema } from 'entity/User'
import { type LoginSchema } from 'features/AurhByUserName'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // async
  loginForm?: LoginSchema
  profile?: ProfileSchema
}

export type StateSchemaKeys = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => StateSchema
  add: (key: StateSchemaKeys, reducer: Reducer) => void
  remove: (key: StateSchemaKeys) => void
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}
