import React from 'react';

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storyBook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { SideBar } from './SideBar';

export default {
  title: 'widget/SideBar',
  component: SideBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => (
  <SideBar {...args} />
);

export const Light = Template.bind({});
Light.decorators = [
  StoreDecorator({
    user: { authData: {} },
  }),
];

export const Dark = Template.bind({});
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: { authData: {} },
  }),
];

export const NoAuth = Template.bind({});
NoAuth.args = {};
NoAuth.decorators = [
  StoreDecorator({
    user: {},
  }),
];
