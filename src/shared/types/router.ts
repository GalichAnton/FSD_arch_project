import { type RouteProps } from 'react-router-dom'

// eslint-disable-next-line fsd-arch-plugin/layer-imports
import { type UserRole } from '@/entity/User'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRole[]
}
