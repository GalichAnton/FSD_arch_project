import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { Suspense } from 'react'
import { NotFoundPage } from 'pages/NotFoundPage'
import { PageLoader } from 'widgets/PageLoader'
import { ProfilePage } from 'pages/ProfilePage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'
import { ArticleEditPage } from 'pages/ArticleEditPage'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

export const AppRoutes = {
  MAIN: '/',
  ABOUT: 'about',
  PROFILE: 'profile',
  ARTICLES: '/articles',
  ARTICLE_DETAILS: '/article_details',
  ARTICLE_CREATE: '/article_create',
  ARTICLE_EDIT: '/article_edit',
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
  // last

  NOT_FOUND: {
    path: RoutePath.NOT_FOUND,
    element: <NotFoundPage />,
  },
}
