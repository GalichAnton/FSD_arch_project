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

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteProfile = (id: string) => `/profile/${id}`
export const getRouteArticles = () => '/articles'
export const getRouteArticleDetails = (id: string) => `/articles/${id}`
export const getRouteArticleCreate = () => '/articles/new'
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`
export const getRouteAdmin = () => '/admin'
export const getRouteForbidden = () => '/forbidden'
