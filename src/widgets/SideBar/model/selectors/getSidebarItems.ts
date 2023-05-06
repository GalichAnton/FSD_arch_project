import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from 'entity/User'
import { RoutePath } from '@/shared/config/routerConfig/routeConfig'
import MainIcon from '@/shared/assets/icons/main-20-20.svg'
import AboutIcon from '@/shared/assets/icons/about-20-20.svg'
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg'
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg'
import { type SidebarItemType } from '../types/sidebar'

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.MAIN,
        Icon: MainIcon,
        text: 'Главная',
      },
      {
        path: RoutePath.ABOUT,
        Icon: AboutIcon,
        text: 'О сайте',
      },
    ]

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePath.PROFILE + userData.id,
          Icon: ProfileIcon,
          text: 'Профиль',
          authOnly: true,
        },
        {
          path: RoutePath.ARTICLES,
          Icon: ArticleIcon,
          text: 'Статьи',
          authOnly: true,
        },
      )
    }

    return sidebarItemsList
  },
)
