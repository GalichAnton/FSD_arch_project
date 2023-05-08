import { type RouteProps } from 'react-router-dom'
import { type UserRole } from '@/entity/User'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRole[]
}
