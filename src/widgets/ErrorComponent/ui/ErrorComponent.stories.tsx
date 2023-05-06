import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ErrorComponent } from './ErrorComponent'
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

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
