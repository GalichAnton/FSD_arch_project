import React, { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SideBar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'

interface SideBarProps {
  className?: string
}

export const SideBar: FC<SideBarProps> = (props) => {
  const { className } = props

  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(collapsed => !collapsed)
  }

  return (
    <div className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [className])}>
      <button onClick={() => { onToggle() }}>Toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cls.langSwitcher}/>
      </div>
    </div>
  )
}
