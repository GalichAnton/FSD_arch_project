import { AppRoutes } from 'shared/config/routerConfig/routeConfig'
import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props

  const { t } = useTranslation()

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={AppRoutes.MAIN} className={cls.mainLink}>{t('Главная страница')}</AppLink>
        <AppLink variant={AppLinkVariant.SECONDARY} to={AppRoutes.ABOUT}>{t('О нас')}</AppLink>
      </div>
    </div>
  )
}
