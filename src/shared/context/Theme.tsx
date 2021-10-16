import React, { useEffect, useState, createContext, useCallback } from "react";

import { ThemeProvider, Theme, CssBaseline } from "@material-ui/core";

import { LightTheme, DarkTheme } from "../themes";

interface IThemeContextData {
  toggleTheme(): void;
  isDark: boolean;
  theme: Theme;
}

export const ThemeContext = createContext<IThemeContextData>(
  {} as IThemeContextData
);

export const ThemesProvider: React.FC = ({ children }) => {
  useEffect(() => {
    const isDark = false;
    setThemeData((oldState) => ({
      ...oldState,
      theme: isDark ? DarkTheme : LightTheme,
      isDark,
    }));
  }, []);

  const handleToggleTheme = useCallback(() => {
    setThemeData((oldState) => ({
      ...oldState,
      theme: oldState.isDark ? LightTheme : DarkTheme,
      isDark: !oldState.isDark,
    }));
  }, []);

  const [themeData, setThemeData] = useState<IThemeContextData>({
    toggleTheme: handleToggleTheme,
    theme: LightTheme,
    isDark: false,
  });

  return (
    <ThemeContext.Provider value={themeData}>
      <CssBaseline />
      <ThemeProvider theme={themeData.theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
