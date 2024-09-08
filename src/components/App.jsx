import { AuthProvider } from 'context/authContext';
import { RouterProvider } from 'react-router';
import { Router } from 'routing';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { blueTheme, greenTheme, yellowTheme } from 'theme';
import { GlobalStyles } from 'GlobalStyles';
import { ThemeSwitcher } from 'ThemeSwitcher';

export const App = () => {
  const [theme, setTheme] = useState('yellow'); // Добавляем setTheme

  const currentTheme =
    theme === 'yellow'
      ? yellowTheme
      : theme === 'green'
      ? greenTheme
      : blueTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <AuthProvider>
        <ThemeSwitcher onThemeChange={setTheme} />
        <RouterProvider router={Router} />
      </AuthProvider>
    </ThemeProvider>
  );
};
