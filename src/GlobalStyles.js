import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
    --dark-color: ${({ theme }) => theme.colors.dark};
    --light-color: ${({ theme }) => theme.colors.light};

  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
      font-size: 16;
    color: #121417;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

   p {
    margin: 0;
  }

`;
