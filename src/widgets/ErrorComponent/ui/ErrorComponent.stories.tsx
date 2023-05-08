import React from 'react'

import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ErrorComponent } from './ErrorComponent'

export default {
  title: 'widget/ErrorComponent',
  component: ErrorComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ErrorComponent>

const Template: ComponentStory<typeof ErrorComponent> = (args) => <ErrorComponent {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})

Dark.decorators = [ThemeDecorator(Theme.DARK)]
