import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  width: 1200px;
  display: flex;
  padding: 20px 128px;
  justify-content: space-between;
  align-items: center;
`;

export const LogoBlock = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const LogoText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 28px;
`;

export const NavigationButton = styled(NavLink)`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  padding: 4px;
`;

export const RegistrationWrapper = styled.div`
  display: flex;
  gap: 28px;
`;

export const RegistrationButton = styled.button`
  color: white;
  font-weight: 600;
  background-color: black;
  border: none;
  cursor: pointer;
  padding: 14px 39px;
  border-radius: 12px;
  margin: 0;
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  font-weight: 600;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  padding: 4px;
`;
