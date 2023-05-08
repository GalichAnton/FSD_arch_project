import React from 'react'

import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Modal } from './Modal'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const ModalExample = Template.bind({})
ModalExample.args = {
  isOpen: true,
  children: 'Lorem ipsum',
}

export const ModalExampleDark = Template.bind({})
ModalExampleDark.args = {
  isOpen: true,
  children: 'Lorem ipsum',
}
ModalExampleDark.decorators = [ThemeDecorator(Theme.DARK)]
