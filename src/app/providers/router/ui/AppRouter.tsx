import { getUserAuthData } from 'entity/User'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { RouteConfig } from 'shared/config/routerConfig/routeConfig'

export const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData)

  const routes = useMemo(() => {
    return Object.values(RouteConfig).filter(route => {
      if (route.authOnly && !isAuth) {
        return false
      }
      return true
    })
  }, [isAuth])

  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={<div className={'page-wrapper'}>{element}</div>} />
      ))}
    </Routes>
  )
}
