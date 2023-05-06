import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from '@/app/providers/StoreProvider'
import { getCounter } from './getCounter'

describe('getCounter', () => {
  test('returns the counter', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 1 },
    }

    expect(getCounter(state as StateSchema)).toEqual({ value: 1 })
  })
})
