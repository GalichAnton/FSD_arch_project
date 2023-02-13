import { type Story } from '@storybook/react'
import { type Theme } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => (Story: Story) => {
  return (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  )
}
