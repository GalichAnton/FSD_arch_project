/* eslint-disable fsd-arch-plugin/layer-imports */
import { type Story } from '@storybook/react'

import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { type Theme } from '@/shared/const/theme'

export const ThemeDecorator = (theme: Theme) => (Story: Story) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  )
}
