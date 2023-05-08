import { type DeepPartial } from '@reduxjs/toolkit'

import { type LoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: 'vasa',
    }
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('dada'))).toEqual({ username: 'dada' })
  })

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '123',
    }
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('777'))).toEqual({ password: '777' })
  })
})
