import React from 'react'

import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator'

import { EditableProfileCardHeader } from './EditableProfileCardHeader'

export default {
  title: 'features/editableProfileCard/EditableProfileCardHeader',
  component: EditableProfileCardHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditableProfileCardHeader>

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => <EditableProfileCardHeader {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
