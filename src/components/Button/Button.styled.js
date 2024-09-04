import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 16px 88px 16px 88px;
  background-color: var(--dark-color);
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: var(--light-color);
  }
`;
