import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';

import { userReducer } from '@/entity/User';
import { uiReducer } from '@/features/UI';
import { $api } from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';

import { createReducerManager } from './reducerManager';
import { type ThunkExtraArg, type StateSchema } from './StateSchema';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    ui: uiReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }).concat(rtkApi.middleware),
  });

  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
