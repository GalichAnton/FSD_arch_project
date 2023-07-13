import { useEffect, useState } from 'react';

import { matchPath, useLocation } from 'react-router-dom';

import { AppRouteByPathPattern, type AppRoutes } from '@/shared/const/router';

export function useRouteChange() {
  const location = useLocation();
  const [appRoute, setAppRoute] = useState<keyof typeof AppRoutes>('MAIN');

  useEffect(() => {
    Object.entries(AppRouteByPathPattern).forEach(([pattern, route]) => {
      if (matchPath(pattern, location.pathname)) {
        setAppRoute(route);
      }
    });
  }, [location.pathname]);

  return appRoute;
}
