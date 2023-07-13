import React from 'react';

import { useJsonSettings } from '@/entity/User';

import { ThemeProvider } from './ThemeProvider';

export const withTheme = (Component: React.ComponentType) => {
  return () => {
    const { theme: defaultTheme } = useJsonSettings();
    return (
      <ThemeProvider initialTheme={defaultTheme}>
        <Component />
      </ThemeProvider>
    );
  };
};
