import type React from 'react'
import { RoutePath } from 'shared/config/routerConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about.svg'
import MainIcon from 'shared/assets/icons/home.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'

export interface SidebarItemType {
  path: string
  text: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
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
  {
    path: RoutePath.PROFILE,
    Icon: ProfileIcon,
    text: 'Профиль',
    authOnly: true,
  },
]
