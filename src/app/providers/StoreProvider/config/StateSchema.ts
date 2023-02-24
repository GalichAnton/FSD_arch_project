import { type CounterSchema } from 'entity/Counter'
import { type UserSchema } from 'entity/User'
import { type LoginSchema } from 'features/AurhByUserName'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  loginForm: LoginSchema
}
