import { Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RouteConfig, type AppRoutesProps } from 'shared/config/routerConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'
import { RequireAuth } from './RequireAuth'

export const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
          {route.element}
        </Suspense>
    )
    return (
        <Route
          key={route.path}
          path={route.path}
          element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
        />
    )
  }, [])

  return (
    <Routes>
      {Object.values(RouteConfig).map(renderWithWrapper)}
    </Routes>
  )
}
