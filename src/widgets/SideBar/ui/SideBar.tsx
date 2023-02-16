import React, { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SideBar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { AppButton, AppButtonSize, AppButtonVariant } from 'shared/ui/AppButton/AppButton'
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import { AppRoutes } from 'shared/config/routerConfig/routeConfig'
import { useTranslation } from 'react-i18next'
import AboutIcon from 'shared/assets/icons/about.svg'
import HomeIcon from 'shared/assets/icons/home.svg'

interface SideBarProps {
  className?: string
}

export const SideBar: FC<SideBarProps> = (props) => {
  const { className } = props

  const [collapsed, setCollapsed] = useState(false)

  const { t } = useTranslation()

  const onToggle = () => {
    setCollapsed(collapsed => !collapsed)
  }

  return (
    <div
      data-testid='sideBar'
      className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [className])
    }>
      <AppButton data-testid='toggle'
        className={cls.collapseBtn}
        onClick={() => { onToggle() }}
        variant={AppButtonVariant.BACKGROUND_INVERTED}
        square
        size={AppButtonSize.L}
        >
        {collapsed ? '>' : '<'}
      </AppButton>
      <div className={cls.items}>
        <AppLink to={AppRoutes.MAIN} className={cls.item}>
        <HomeIcon className={cls.icon}/>
          <span className={cls.link}>
          {t('Главная страница')}
          </span>
        </AppLink>
        <AppLink variant={AppLinkVariant.SECONDARY} to={AppRoutes.ABOUT} className={cls.item} >
        <AboutIcon className={cls.icon}/>
          <span className={cls.link}>{t('О нас')}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cls.langSwitcher} short={collapsed}/>
      </div>
    </div>
  )
}
