import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkVariant } from '@/shared/ui/AppLink'
import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './SideBarItem.module.scss'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entity/User'
import { type SidebarItemType } from '../../model/types/sidebar'

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation()

  const isAuth = useSelector(getUserAuthData)

  if (item.authOnly && !isAuth) {
    return null
  }

  return (
    <AppLink
      variant={AppLinkVariant.SECONDARY}
      to={item.path}
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>
          {t(item.text)}
      </span>
    </AppLink>
  )
})
