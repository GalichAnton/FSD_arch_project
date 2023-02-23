import { type CounterSchema } from 'entity/Counter'
import { type UserSchema } from 'entity/User'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
}
