import { type StateSchema } from 'app/providers/StoreProvoder'

export const getCounter = (state: StateSchema) => state.counter
