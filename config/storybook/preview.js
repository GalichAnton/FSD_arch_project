import { addDecorator } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storyBook/StyleDecorator';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator';
import { Theme } from 'shared/const/theme';
import { RouterDecorator } from 'shared/config/storyBook/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storyBook/SuspenseDecorator';
import { FeaturesFlagsDecorator } from '../../src/shared/config/storyBook/FeaturesFlagsDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
addDecorator(FeaturesFlagsDecorator({}));
