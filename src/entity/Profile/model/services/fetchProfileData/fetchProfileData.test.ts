import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { Country } from 'entity/Country'
import { Currency } from 'entity/Currency'
import { fetchProfileData } from './fetchProfileData'

const data = {
  username: 'admin',
  age: 22,
  country: Country.Russia,
  lastname: 'ulbi tv',
  first: 'asd',
  city: 'asf',
  currency: Currency.RUB,
}

describe('fetchProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.callThunk()

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('error login', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('fulfilled')
  })
})
