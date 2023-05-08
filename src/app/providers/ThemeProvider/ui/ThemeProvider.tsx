import React, { type FC, useMemo, useState, type ReactNode } from 'react'
import { Theme, ThemeContext } from '../../../../shared/lib/context/ThemeContext'
import { LOCAL_STORAGE_THEME_KEY } from '../lib/LOCAL_STORAGE_THEME_KEY'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
  initialTheme?: Theme
  children: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}
