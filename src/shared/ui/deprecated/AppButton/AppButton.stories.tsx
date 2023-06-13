import React from 'react';

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { AppButton, AppButtonSize, AppButtonVariant } from './AppButton';

export default {
  title: 'shared/AppButton',
  component: AppButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => (
  <AppButton {...args} />
);

export const Clear = Template.bind({});
Clear.args = {
  variant: AppButtonVariant.CLEAR,
  children: 'AppButton',
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  variant: AppButtonVariant.CLEAR_INVERTED,
  children: 'AppButton',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'AppButton',
};
Primary.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  variant: AppButtonVariant.OUTLINE,
  children: 'AppButton',
};

export const Background = Template.bind({});
Background.args = {
  variant: AppButtonVariant.BACKGROUND_INVERTED,
  children: 'AppButton',
};

export const Square = Template.bind({});
Square.args = {
  variant: AppButtonVariant.BACKGROUND_INVERTED,
  children: '>',
  square: true,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  variant: AppButtonVariant.OUTLINE,
  children: 'AppButton',
  size: AppButtonSize.XL,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  variant: AppButtonVariant.OUTLINE,
  children: 'AppButton',
  size: AppButtonSize.L,
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
  variant: AppButtonVariant.OUTLINE,
  children: 'AppButton',
  size: AppButtonSize.M,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: '>',
  variant: AppButtonVariant.OUTLINE,
  disabled: true,
};
