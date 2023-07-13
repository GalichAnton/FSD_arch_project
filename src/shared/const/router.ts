export const AppRoutes = {
  MAIN: '/',
  SETTINGS: '/settings',
  ABOUT: 'about',
  PROFILE: 'profile',
  ARTICLES: '/articles',
  ARTICLE_DETAILS: '/article_details',
  ARTICLE_CREATE: '/article_create',
  ARTICLE_EDIT: '/article_edit',
  ADMIN_PANEL: '/admin_panel',
  FORBIDDEN: '/forbidden',
  NOT_FOUND: '*',
} as const;

export type AppRoutesType = keyof typeof AppRoutes;

export const getRouteMain = () => '/';
export const getRouteSettings = () => '/settings';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';

export const AppRouteByPathPattern: Record<string, keyof typeof AppRoutes> = {
  [getRouteMain()]: 'MAIN',
  [getRouteSettings()]: 'SETTINGS',
  [getRouteAbout()]: 'ABOUT',
  [getRouteProfile(':id')]: 'PROFILE',
  [getRouteArticles()]: 'ARTICLES',
  [getRouteArticleDetails(':id')]: 'ARTICLE_DETAILS',
  [getRouteArticleCreate()]: 'ARTICLE_CREATE',
  [getRouteArticleEdit(':id')]: 'ARTICLE_EDIT',
  [getRouteAdmin()]: 'ADMIN_PANEL',
  [getRouteForbidden()]: 'FORBIDDEN',
};
