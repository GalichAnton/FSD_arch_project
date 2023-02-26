import { configureStore,  type ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entity/Counter'
import { userReducer } from 'entity/User'
import { createReducerManager } from './reducerManager'
import { type StateSchema } from './StateSchema'

export function createReduxStore (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })

  // @ts-expect-error
  store.reducerManager = reducerManager

  return store
}
