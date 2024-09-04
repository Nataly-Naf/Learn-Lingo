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
    console.log('logout click');
    signout();
  };
  return (
    <StyledHeader>
      <StyledNavLink to="/Learn-Lingo/">
        <LogoBlock>
          {/* <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_4_550)">
              <path
                d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z"
                fill="#FFDA44"
              />
              <path
                d="M0 14C0 6.26806 6.26806 0 14 0C21.7319 0 28 6.26806 28 14"
                fill="#338AF3"
              />
            </g>
            <defs>
              <clipPath id="clip0_4_550">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg> */}
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
      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileMenuWrapper>
          <MobileMenuItem to="/Learn-Lingo/">Home</MobileMenuItem>
          <MobileMenuItem to="/Learn-Lingo/teachers">Teachers</MobileMenuItem>
          <MobileMenuItem to="/Learn-Lingo/favourites">
            Favourites
          </MobileMenuItem>
        </MobileMenuWrapper>
      </MobileMenu>

      <ButtonWrapper>
        <NavigationButton to="/Learn-Lingo/">Home</NavigationButton>
        <NavigationButton to="/Learn-Lingo/teachers">Teachers</NavigationButton>
        <NavigationButton to="/Learn-Lingo/favourites">
          Favourites
        </NavigationButton>
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
