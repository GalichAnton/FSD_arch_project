import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { MainPage } from './MainPage'
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator'

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = () => <MainPage/>

export const Dark = Template.bind({})

export const Light = Template.bind({})
Light.decorators = [ThemeDecorator(Theme.DARK)]
