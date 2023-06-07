import React from 'react';

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { AboutPage } from './AboutPage';

export default {
  title: 'pages/AboutPage',
  component: AboutPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const Dark = Template.bind({});

export const Light = Template.bind({});
Light.decorators = [ThemeDecorator(Theme.DARK)];
