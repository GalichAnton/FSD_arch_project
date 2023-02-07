import { Route, Routes } from 'react-router-dom'
import { RouteConfig } from 'shared/config/routerConfig/routeConfig'
export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(RouteConfig).map(({ path, element }) => (
        <Route key={path} path={path} element={<div className={'page-wrapper'}>{element}</div>} />
      ))}
    </Routes>
  )
}
