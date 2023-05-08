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

export type AppRoutesType = keyof typeof AppRoutes

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
