import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { AppButton, AppButtonVariant } from './AppButton'
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/AppButton',
  component: AppButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppButton>

const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />

export const Clear = Template.bind({})
Clear.args = {
  variant: AppButtonVariant.CLEAR,
  children: 'AppButton',
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'AppButton',
}
Primary.decorators = [ThemeDecorator(Theme.DARK)]

export const Outline = Template.bind({})
Outline.args = {
  variant: AppButtonVariant.OUTLINE,
  children: 'AppButton',
}
