import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entity/Counter'
import { userReducer } from 'entity/User'
import { createReducerManager } from './reducerManager'
import { type ThunkExtraArg, type StateSchema } from './StateSchema'
import { $api } from 'shared/api/api'
import { uiReducer } from 'features/UI'
import { rtkApi } from 'shared/api/rtkApi'

export function createReduxStore (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    ui: uiReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  }

  const extraArg: ThunkExtraArg = {
    api: $api,
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
    }).concat(rtkApi.middleware),
  })

  // @ts-expect-error
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
