import React, { memo } from 'react'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import { AppButton, AppButtonVariant } from '@/shared/ui/AppButton'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Theme } from '@/shared/const/theme'

export const ThemeSwitcher = memo(() => {
  const { theme, toggleTheme } = useTheme()

  return (
    <AppButton variant={AppButtonVariant.CLEAR} onClick={toggleTheme} >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon/> }
    </AppButton>
  )
})

ThemeSwitcher.displayName = 'ThemeSwitcher'
