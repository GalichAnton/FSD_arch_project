import { type Story } from '@storybook/react'
import { type Theme } from 'app/providers/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (Story: Story) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  )
}
