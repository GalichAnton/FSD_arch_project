import React from 'react';

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { AppButton } from './AppButton';

export default {
  title: 'shared/AppButton',
  component: AppButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />;

export const Clear = Template.bind({});
Clear.args = {
  variant: 'clear',
  children: 'AppButton',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'AppButton',
};
Primary.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  children: 'AppButton',
};

export const Square = Template.bind({});
Square.args = {
  variant: 'clear',
  children: '>',
  square: true,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  variant: 'outline',
  children: 'AppButton',
  size: 'xl',
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  variant: 'outline',
  children: 'AppButton',
  size: 'l',
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
  variant: 'outline',
  children: 'AppButton',
  size: 'm',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: '>',
  variant: 'outline',
  disabled: true,
};
