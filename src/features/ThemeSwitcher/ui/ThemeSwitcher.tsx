import React, { memo, useCallback } from 'react';

import { saveJsonSettings } from '@/entity/User';
import ThemeIcon from '@/shared/assets/icons/theme-light.svg';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { AppButton, AppButtonVariant } from '@/shared/ui/depricated/AppButton';
import { Icon } from '@/shared/ui/depricated/Icon';

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
      <Icon Svg={ThemeIcon} width={40} height={40} inverted />
    </AppButton>
  );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
