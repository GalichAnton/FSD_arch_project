import { type DeepPartial } from '@reduxjs/toolkit'

import { type StateSchema } from '@/app/providers/StoreProvider'

import { getLoginError, getLoginIsLoading, getLoginPassword, getLoginUsername } from './getLoginState'

describe('getLoginState', () => {
  const state: DeepPartial<StateSchema> = {
    loginForm: {
      error: 'error',
      isLoading: true,
      username: 'admin',
      password: '12345',
    },
  }

  test('should return error', () => {
    expect(getLoginError(state as StateSchema)).toEqual('error')
  })

  test('should return isLoading', () => {
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
  })

  test('should return pasword', () => {
    expect(getLoginPassword(state as StateSchema)).toEqual('12345')
  })

  test('should return username', () => {
    expect(getLoginUsername(state as StateSchema)).toEqual('admin')
  })
})
