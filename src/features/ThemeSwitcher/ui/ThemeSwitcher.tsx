import React, { memo, useCallback } from 'react';

import { saveJsonSettings } from '@/entity/User';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import { Theme } from '@/shared/const/theme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { AppButton, AppButtonVariant } from '@/shared/ui/AppButton';

export const ThemeSwitcher = memo(() => {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [dispatch, toggleTheme]);

  return (
    <AppButton variant={AppButtonVariant.CLEAR} onClick={onToggleHandler}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </AppButton>
  );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
