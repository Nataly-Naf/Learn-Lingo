import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  &.active {
    text-decoration: none;
    color: inherit;
  }
`;

export const StyledHeader = styled.header`
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
  margin: 0 auto;
  justify-content: center; /* Добавьте это свойство */
  width: fit-content; /* Добавьте это свойство, чтобы контейнер занимал только нужную ширину */
  margin-bottom: 20px;
  @media (min-width: 590px) {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 1220px) {
    margin-bottom: 0;

    width: 1184px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    padding: 20px 128px;
    justify-content: space-between;
    align-items: center;
  }
`;
export const MobileWrapper = styled.div`
  display: flex;
  gap: 30px;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavigationButton = styled(NavLink)`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  padding: 4px;
  text-decoration: none;
  color: inherit;
  transition: color 0.3 ease;

  &:hover {
    color: #f4c550;
  }
`;

export const RegistrationWrapper = styled.div`
  display: flex;
  gap: 28px;
  margin-top: 20px;
  @media (min-width: 590px) {
    margin-top: 0;
  }
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

  &:hover {
    color: #f4c550;
    transition: color 0.3 ease;
  }
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
export const LogoutButton = styled.button`
  background-color: var(--dark-color);
`;

export const BurgerIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MobileMenuItem = styled(NavLink)`
  padding: 10px 20px;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: #f4f4f4;
  }
`;
