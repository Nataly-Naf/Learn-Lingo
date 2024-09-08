import React from 'react';
import styled from 'styled-components';

const SwitcherContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 auto;
  margin-top: 10px;
  justify-content: center;
  width: fit-content;
`;

const ThemeButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: ${({ color }) => color};

  &:focus {
    outline: none;
  }
`;

export const ThemeSwitcher = ({ onThemeChange }) => {
  return (
    <SwitcherContainer>
      <ThemeButton color="#F4C550" onClick={() => onThemeChange('yellow')} />
      <ThemeButton color="#9FBAAE" onClick={() => onThemeChange('green')} />
      <ThemeButton color="#9FB7CE" onClick={() => onThemeChange('blue')} />
    </SwitcherContainer>
  );
};
