import { Suspense } from 'react';

import { UserRole } from '@/entity/User';
import { AboutPage } from '@/pages/AboutPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { SettingsPage } from '@/pages/SettingsPage';
import {
  getRouteMain,
  type AppRoutesType,
  getRouteArticleDetails,
  getRouteArticles,
  getRouteProfile,
  getRouteAbout,
  getRouteForbidden,
  getRouteAdmin,
  getRouteArticleEdit,
  getRouteArticleCreate,
  getRouteSettings,
} from '@/shared/const/router';
import { type AppRoutesProps } from '@/shared/types/router';
import { PageLoader } from '@/widgets/PageLoader';

export const RouteConfig: Record<AppRoutesType, AppRoutesProps> = {
  MAIN: {
    path: getRouteMain(),
    element: (
      <Suspense fallback={<PageLoader />}>
        <MainPage />
      </Suspense>
    ),
  },
  SETTINGS: {
    path: getRouteSettings(),
    element: <SettingsPage />,
  },
  ABOUT: {
    path: getRouteAbout(),
    element: (
      <Suspense fallback={<PageLoader />}>
        <AboutPage />
      </Suspense>
    ),
  },
  PROFILE: {
    path: getRouteProfile(':id'),
    element: <ProfilePage />,
    authOnly: true,
  },
  ARTICLES: {
    path: getRouteArticles(),
    element: <ArticlesPage />,
    authOnly: true,
  },
  ARTICLE_DETAILS: {
    path: getRouteArticleDetails(':id'),
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  ARTICLE_CREATE: {
    path: getRouteArticleCreate(),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  ARTICLE_EDIT: {
    path: getRouteArticleEdit(':id'),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  ADMIN_PANEL: {
    path: getRouteAdmin(),
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },
  FORBIDDEN: {
    path: getRouteForbidden(),
    element: <ForbiddenPage />,
    authOnly: true,
  },
  // last

  NOT_FOUND: {
    path: '*',
    element: <NotFoundPage />,
  },
};
