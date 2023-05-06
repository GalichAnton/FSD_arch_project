import React, { memo } from 'react'
import { Theme, useTheme } from '@/app/providers/ThemeProvider'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import { AppButton, AppButtonVariant } from '@/shared/ui/AppButton/AppButton'

export const ThemeSwitcher = memo(() => {
  const { theme, toggleTheme } = useTheme()

  return (
    <AppButton variant={AppButtonVariant.CLEAR} onClick={toggleTheme} >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon/> }
    </AppButton>
  )
})

ThemeSwitcher.displayName = 'ThemeSwitcher'
