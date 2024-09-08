import { useState } from 'react';
import {
  CloseButton,
  ModalWrapper,
  ModalWindowTitle,
  ModalWindowText,
  Input,
  FormWrapper,
  SubmitButton,
  Background,
} from './RegisterModalWindow.styled';
import { IoClose } from 'react-icons/io5';
import { useAuth } from 'context/authContext';
import { useNavigate } from 'react-router';

export const RegisterModalWindow = ({ closeModal }) => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [user, setUser] = useState({ email: '', password: '' });
  const handleChange = ({ target: { name, value } }) => {
    return setUser({ ...user, [name]: value });
  };
  const { signup } = useAuth();
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setError('');
      await signup(user.email, user.password);
      closeModal();
      navigate('/Learn-Lingo/');
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <Background>
      <ModalWrapper>
        {error && <p>{error}</p>}
        <CloseButton onClick={() => closeModal()}>
          <IoClose size={32} />
        </CloseButton>

        <ModalWindowTitle>Register</ModalWindowTitle>
        <ModalWindowText>
          Welcome! Please enter your credentials to make your account.
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
          <SubmitButton type="submit">Register</SubmitButton>
        </FormWrapper>
      </ModalWrapper>
    </Background>
  );
};
