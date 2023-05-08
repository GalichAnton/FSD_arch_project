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
import { type AppRoutesProps } from '@/shared/types/router'
import { type AppRoutesType, RoutePath } from '@/shared/const/router'

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
