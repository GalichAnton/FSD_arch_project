import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { NotFoundPage } from './NotFoundPage'
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotFoundPage>

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage/>

export const Dark = Template.bind({})

export const Light = Template.bind({})
Light.decorators = [ThemeDecorator(Theme.DARK)]
