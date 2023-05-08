import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { SideBar } from './SideBar'
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator'
import { Theme } from '@/shared/const/theme'

export default {
  title: 'widget/SideBar',
  component: SideBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SideBar>

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />

export const Light = Template.bind({})
Light.decorators = [
  StoreDecorator({
    user: { authData: {} },
  }),
]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: { authData: {} },
})]

export const NoAuth = Template.bind({})
NoAuth.args = {}
NoAuth.decorators = [
  StoreDecorator({
    user: {},
  }),
]
