import { useEffect, useRef, useState } from 'react';
import {
  CloseButton,
  ModalWrapper,
  ModalWindowTitle,
  ModalWindowText,
  Input,
  FormWrapper,
  SubmitButton,
  Background,
} from './LoginModalWindow.styled';
import { IoClose } from 'react-icons/io5';
import { useAuth } from 'context/authContext';
import { useNavigate } from 'react-router';

export const LoginModalWindow = ({ closeModal }) => {
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const { signin } = useAuth();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setError('');
      await signin(user.email, user.password);
      navigate('/Learn-Lingo/');
      closeModal();
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [closeModal]);

  useEffect(() => {
    const handleClickOutside = e => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeModal]);

  return (
    <Background>
      <ModalWrapper>
        {error && <p>{error}</p>}
        <div ref={modalRef}>
          <CloseButton onClick={closeModal}>
            <IoClose size={32} />
          </CloseButton>

          <ModalWindowTitle>Login</ModalWindowTitle>
          <ModalWindowText>
            Welcome back! Please enter your credentials to access your account
            and continue your search for the teacher.
          </ModalWindowText>
          <FormWrapper onSubmit={handleSubmit}>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />

            <Input
              id="password"
              type="password"
              placeholder="******"
              name="password"
              onChange={handleChange}
            />
            <SubmitButton type="submit">Login</SubmitButton>
          </FormWrapper>
        </div>
      </ModalWrapper>
    </Background>
  );
};
