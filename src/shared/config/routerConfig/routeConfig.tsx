import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { Suspense } from 'react'
import { NotFoundPage } from 'pages/NotFoundPage'
import { PageLoader } from 'widgets/PageLoader'
import { ProfilePage } from 'pages/ProfilePage'

export const AppRoutes = {
  MAIN: '/',
  ABOUT: 'about',
  PROFILE: 'profile',
  NOT_FOUND: '*',
} as const

type AppRoutesType = keyof typeof AppRoutes

export const RoutePath: Record<AppRoutesType, string> = {
  MAIN: '/',
  ABOUT: '/about',
  PROFILE: '/profile',
  NOT_FOUND: '*',
}

export const RouteConfig: Record<AppRoutesType, RouteProps> = {
  MAIN: {
    path: RoutePath.MAIN,
    element: <Suspense fallback={<PageLoader/>}><MainPage /></Suspense>,
  },
  ABOUT: {
    path: RoutePath.ABOUT,
    element: <Suspense fallback={<PageLoader/>}><AboutPage /></Suspense>,
  },
  PROFILE: {
    path: RoutePath.PROFILE,
    element: <ProfilePage/>,
  },

  NOT_FOUND: {
    path: RoutePath.NOT_FOUND,
    element: <NotFoundPage />,
  },
}
