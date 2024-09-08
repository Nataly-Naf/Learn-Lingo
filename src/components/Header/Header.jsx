import { useState } from 'react';
import { useAuth } from 'context/authContext';

import {
  ButtonWrapper,
  LogoBlock,
  LogoText,
  StyledHeader,
  RegistrationWrapper,
  NavigationButton,
  RegistrationButton,
  LoginButton,
  StyledNavLink,
  LogoutButton,
  BurgerIcon,
  MobileMenu,
  MobileMenuItem,
  MobileMenuWrapper,
  MobileWrapper,
} from './Header.styled';
import { Icon } from 'components/Icon.jsx';
import { LoginModalWindow } from 'components/LoginModalWindow/LoginModalWindow';
import { RegisterModalWindow } from 'components/RegisterModalWindow/RegisterModalWindow';

export const Header = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const closeLoginModal = () => setLoginModalOpen(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const closeRegisterModal = () => setRegisterModalOpen(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { user, signout } = useAuth();

  const handleLogout = () => {
    signout();
  };
  return (
    <StyledHeader>
      <MobileWrapper>
        <StyledNavLink to="/Learn-Lingo/">
          <LogoBlock>
            <Icon id="logo" styles={{ width: '20px', height: '20px' }} />

            <LogoText>LearnLingo</LogoText>
          </LogoBlock>
        </StyledNavLink>

        <BurgerIcon onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6H21M3 12H21M3 18H21"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </BurgerIcon>
      </MobileWrapper>
      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileMenuWrapper>
          <MobileMenuItem to="/Learn-Lingo/">Home</MobileMenuItem>
          <MobileMenuItem to="/Learn-Lingo/teachers">Teachers</MobileMenuItem>
          {user && (
            <NavigationButton to="/Learn-Lingo/favourites">
              Favourites
            </NavigationButton>
          )}
        </MobileMenuWrapper>
      </MobileMenu>

      <ButtonWrapper>
        <NavigationButton to="/Learn-Lingo/">Home</NavigationButton>
        <NavigationButton to="/Learn-Lingo/teachers">Teachers</NavigationButton>
        {user && (
          <NavigationButton to="/Learn-Lingo/favourites">
            Favourites
          </NavigationButton>
        )}
      </ButtonWrapper>
      <RegistrationWrapper>
        {!user && (
          <LoginButton onClick={() => setLoginModalOpen(true)}>
            <Icon
              id="login"
              styles={{
                width: '20px',
                height: '20px',
                color: 'var(--dark-color)',
              }}
            />
            Log in
          </LoginButton>
        )}
        {user && (
          <div>
            <p>Hi! {user.email}</p>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </div>
        )}
        {isLoginModalOpen && <LoginModalWindow closeModal={closeLoginModal} />}
        <RegistrationButton
          onClick={() => {
            setRegisterModalOpen(true);
          }}
        >
          Registration
        </RegistrationButton>
        {isRegisterModalOpen && (
          <RegisterModalWindow closeModal={closeRegisterModal} />
        )}
      </RegistrationWrapper>
    </StyledHeader>
  );
};
