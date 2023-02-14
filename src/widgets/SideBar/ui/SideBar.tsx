import React, { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SideBar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { AppButton } from 'shared/ui/AppButton/AppButton'
import { useTranslation } from 'react-i18next'

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
      <AppButton data-testid='toggle' onClick={() => { onToggle() }}>{t('Переключение')}</AppButton>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cls.langSwitcher}/>
      </div>
    </div>
  )
}
