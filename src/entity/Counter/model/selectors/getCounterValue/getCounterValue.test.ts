import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from '@/app/providers/StoreProvider'
import { getCounterValue } from './getCounterValue'

describe('getCounterValue', () => {
  test('getCounterValue', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 1 },
    }
    expect(getCounterValue(state as StateSchema)).toEqual(1)
  })
})
