import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { SideBar } from './SideBar'
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'widget/SideBar',
  component: SideBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SideBar>

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})

Dark.decorators = [ThemeDecorator(Theme.DARK)]
