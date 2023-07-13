import { type ReactElement } from 'react';

import { type AppRoutes } from '@/shared/const/router';
import { useRouteChange } from '@/shared/lib/router/useRouteChange';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';

export function useAppToolbar() {
  const appRoute = useRouteChange();

  const toolbarByAppRoute: OptionalRecord<keyof typeof AppRoutes, ReactElement> = {
    ARTICLES: <ScrollToolbar />,
    ARTICLE_DETAILS: <ScrollToolbar />,
  };

  return toolbarByAppRoute[appRoute];
}
