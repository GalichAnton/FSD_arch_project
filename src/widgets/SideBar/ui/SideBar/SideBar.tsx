import React, { useState, useMemo, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SideBar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { AppButton, AppButtonSize, AppButtonVariant } from 'shared/ui/AppButton/AppButton'
import { SidebarItem } from '../SideBarItem/SideBarItem'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { VStack } from 'shared/ui/Stack'

interface SideBarProps {
  className?: string
}

export const SideBar = memo((props: SideBarProps) => {
  const { className } = props

  const [collapsed, setCollapsed] = useState(false)
  const sidebarItemsList = useSelector(getSidebarItems)

  const onToggle = () => {
    setCollapsed(collapsed => !collapsed)
  }

  const itemsList = useMemo(() => sidebarItemsList.map((item) => (
    <SidebarItem
        item={item}
        collapsed={collapsed}
        key={item.path}
    />
  )), [collapsed])

  return (
    <menu
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
      <VStack gap='8' className={cls.items}>
        {itemsList}
      </VStack>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cls.langSwitcher} short={collapsed}/>
      </div>
    </menu>
  )
})

SideBar.displayName = 'SideBar'
