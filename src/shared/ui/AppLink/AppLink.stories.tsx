import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { AppLink, AppLinkVariant } from './AppLink'

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'AppLink',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: AppLinkVariant.SECONDARY,
  children: 'AppLink',
}
