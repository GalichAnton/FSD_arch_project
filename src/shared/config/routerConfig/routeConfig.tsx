import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {Suspense} from "react";

export const AppRoutes = {
  MAIN: '/',
  ABOUT: 'about',
} as const

type AppRoutes = keyof typeof AppRoutes

export const RoutePath : Record<AppRoutes, string> = {
  MAIN: '/',
  ABOUT: '/about',
}

export const RouteConfig : Record<AppRoutes, RouteProps> = {
  MAIN: {
    path: RoutePath.MAIN,
    element: <Suspense fallback={<div>Loading...</div>}><MainPage /></Suspense>,
  },
  ABOUT: {
    path: RoutePath.ABOUT,
    element: <Suspense fallback={<div>Loading...</div>}><AboutPage /></Suspense>,
  }
}