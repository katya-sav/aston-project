import { ReactNode, useState, useEffect, useMemo, useCallback } from 'react';

import { ThemeContext } from './theme-context';
import { themes } from './themes';

import type { Theme } from '../../../types';

const THEME_KEY = 'THEME_KEY';

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem(THEME_KEY) as Theme) || 'dark',
  );

  useEffect(() => {
    setCSSVariables(themes[theme]);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
  }, [theme]);

  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

function setCSSVariables(theme: Record<string, string>) {
  for (const value in theme) {
    document.documentElement.style.setProperty(`--${value}`, theme[value]);
  }
}
