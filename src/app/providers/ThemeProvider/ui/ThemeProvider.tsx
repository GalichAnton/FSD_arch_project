import React, { type FC, useMemo, useState, type ReactNode, useEffect } from 'react';

import { useJsonSettings } from '@/entity/User';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const { theme: defaultTheme } = useJsonSettings();
  const [isThemeInited, setThemeInited] = useState(false);
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme || Theme.LIGHT);

  useEffect(() => {
    if (!isThemeInited && defaultTheme) {
      setTheme(defaultTheme);
      setThemeInited(true);
    }
  }, [defaultTheme, isThemeInited]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
