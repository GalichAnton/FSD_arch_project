import React, { memo } from 'react';

import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { AppButton, AppButtonVariant } from '@/shared/ui/AppButton';

export const ThemeSwitcher = memo(() => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppButton variant={AppButtonVariant.CLEAR} onClick={toggleTheme}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </AppButton>
  );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
