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
          <svg
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
          </svg>
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
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 2.5H13.5C14.9001 2.5 15.6002 2.5 16.135 2.77248C16.6054 3.01217 16.9878 3.39462 17.2275 3.86502C17.5 4.3998 17.5 5.09987 17.5 6.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H12.5"
                stroke="#F4C550"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.33333 5.83325L12.5 9.99992M12.5 9.99992L8.33333 14.1666M12.5 9.99992L2.5 9.99992"
                stroke="#F4C550"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
