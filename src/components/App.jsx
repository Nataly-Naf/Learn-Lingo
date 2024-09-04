import { AuthProvider } from 'context/authContext';
import { RouterProvider } from 'react-router';
import { Router } from 'routing';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { blueTheme, greenTheme, yellowTheme } from 'theme';
import { GlobalStyles } from 'GlobalStyles';
import { ThemeSwitcher } from 'ThemeSwitcher';

export const App = () => {
  const [theme, setTheme] = useState('yellow');

  const handleThemeChange = selectedTheme => {
    setTheme(selectedTheme);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => {
      if (prevTheme === 'yellow') return 'green';
      if (prevTheme === 'green') return 'blue';
      return 'yellow';
    });
  };
  const currentTheme =
    theme === 'yellow'
      ? yellowTheme
      : theme === 'green'
      ? greenTheme
      : blueTheme;
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <ThemeSwitcher onThemeChange={handleThemeChange} />
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </ThemeProvider>
  );
};
