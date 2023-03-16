import { type User } from 'entity/User'

export interface Comment {
  id: string
  user: User
  text: string
}
