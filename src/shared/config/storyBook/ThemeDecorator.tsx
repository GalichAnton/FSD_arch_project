/* eslint-disable fsd-arch-plugin/layer-imports */
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { type Theme } from '@/shared/const/theme'
import { type Story } from '@storybook/react'

export const ThemeDecorator = (theme: Theme) => (Story: Story) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  )
}
