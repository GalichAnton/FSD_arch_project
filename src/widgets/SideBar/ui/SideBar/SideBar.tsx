import React, { type FC, useState, useMemo, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SideBar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { AppButton, AppButtonSize, AppButtonVariant } from 'shared/ui/AppButton/AppButton'
import { SidebarItemsList } from '../../model/items'
import { SidebarItem } from '../SideBarItem/SideBarItem'

interface SideBarProps {
  className?: string
}

export const SideBar = memo((props: SideBarProps) => {
  const { className } = props

  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(collapsed => !collapsed)
  }

  const itemsList = useMemo(() => SidebarItemsList.map((item) => (
    <SidebarItem
        item={item}
        collapsed={collapsed}
        key={item.path}
    />
  )), [collapsed])

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
        {itemsList}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cls.langSwitcher} short={collapsed}/>
      </div>
    </div>
  )
})

SideBar.displayName = 'SideBar'
