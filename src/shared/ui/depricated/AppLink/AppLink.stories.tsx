import React from 'react';

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { AppLinkDeprecated, AppLinkVariant } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLinkDeprecated,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppLinkDeprecated>;

const Template: ComponentStory<typeof AppLinkDeprecated> = (args) => <AppLinkDeprecated {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'AppLink',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: AppLinkVariant.SECONDARY,
  children: 'AppLink',
};
