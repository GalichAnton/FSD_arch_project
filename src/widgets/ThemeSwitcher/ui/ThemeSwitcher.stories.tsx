import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ThemeSwitcher } from './ThemeSwitcher'
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = () => <ThemeSwitcher />

export const Dark = Template.bind({})

export const Light = Template.bind({})
Light.decorators = [ThemeDecorator(Theme.DARK)]
