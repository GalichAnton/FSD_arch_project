import { type RouteProps } from 'react-router-dom'
import { MainPage } from '@/pages/MainPage'
import { AboutPage } from '@/pages/AboutPage'
import { Suspense } from 'react'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { PageLoader } from '@/widgets/PageLoader'
import { ProfilePage } from '@/pages/ProfilePage'
import { ArticlesPage } from '@/pages/ArticlesPage'
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage'
import { ArticleEditPage } from '@/pages/ArticleEditPage'
import { AdminPanelPage } from '@/pages/AdminPanelPage'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { UserRole } from '@/entity/User'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRole[]
}

export const AppRoutes = {
  MAIN: '/',
  ABOUT: 'about',
  PROFILE: 'profile',
  ARTICLES: '/articles',
  ARTICLE_DETAILS: '/article_details',
  ARTICLE_CREATE: '/article_create',
  ARTICLE_EDIT: '/article_edit',
  ADMIN_PANEL: '/admin_panel',
  FORBIDDEN: '/forbidden',
  NOT_FOUND: '*',
} as const

type AppRoutesType = keyof typeof AppRoutes

export const RoutePath: Record<AppRoutesType, string> = {
  MAIN: '/',
  ABOUT: '/about',
  PROFILE: '/profile/',
  ARTICLES: '/articles',
  ARTICLE_DETAILS: '/articles/', // + :id,
  ARTICLE_CREATE: '/articles/new',
  ARTICLE_EDIT: '/articles/:id/edit',
  ADMIN_PANEL: '/admin_panel',
  FORBIDDEN: '/forbidden',

  NOT_FOUND: '*',
}

export const RouteConfig: Record<AppRoutesType, AppRoutesProps> = {
  MAIN: {
    path: RoutePath.MAIN,
    element: <Suspense fallback={<PageLoader/>}><MainPage /></Suspense>,
  },
  ABOUT: {
    path: RoutePath.ABOUT,
    element: <Suspense fallback={<PageLoader/>}><AboutPage /></Suspense>,
  },
  PROFILE: {
    path: `${RoutePath.PROFILE}:id`,
    element: <ProfilePage/>,
    authOnly: true,
  },
  ARTICLES: {
    path: RoutePath.ARTICLES,
    element: <ArticlesPage />,
    authOnly: true,
  },
  ARTICLE_DETAILS: {
    path: `${RoutePath.ARTICLE_DETAILS}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  ARTICLE_CREATE: {
    path: `${RoutePath.ARTICLE_CREATE}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  ARTICLE_EDIT: {
    path: `${RoutePath.ARTICLE_EDIT}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  ADMIN_PANEL: {
    path: `${RoutePath.ADMIN_PANEL}`,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },
  FORBIDDEN: {
    path: `${RoutePath.FORBIDDEN}`,
    element: <ForbiddenPage />,
    authOnly: true,
  },
  // last

  NOT_FOUND: {
    path: RoutePath.NOT_FOUND,
    element: <NotFoundPage />,
  },
}
