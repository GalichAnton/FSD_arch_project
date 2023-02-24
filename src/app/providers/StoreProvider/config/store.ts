import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entity/Counter'
import { userReducer } from 'entity/User'
import { loginReducer } from 'features/AurhByUserName'
import { type StateSchema } from './StateSchema'

export function createReduxStore (initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
      user: userReducer,
      loginForm: loginReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })
}
