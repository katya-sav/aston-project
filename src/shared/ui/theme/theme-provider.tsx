import { ReactNode, useState, useEffect } from 'react';

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

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function setCSSVariables(theme: Record<string, string>) {
  for (const value in theme) {
    document.documentElement.style.setProperty(`--${value}`, theme[value]);
  }
}
