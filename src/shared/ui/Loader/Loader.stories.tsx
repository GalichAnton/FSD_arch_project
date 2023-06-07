import React from 'react';

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Loader } from './Loader';

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Dark = Template.bind({});

export const Light = Template.bind({});
Light.decorators = [ThemeDecorator(Theme.DARK)];
