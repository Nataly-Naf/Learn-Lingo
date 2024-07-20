import {
  CloseButton,
  ModalWrapper,
  ModalWindowTitle,
  ModalWindowText,
  Input,
  FormWrapper,
  SubmitButton,
} from './LoginModalWindow.styled';
import { IoClose } from 'react-icons/io5';

export const LoginModalWindow = ({ closeModal }) => {
  return (
    <ModalWrapper>
      <CloseButton onClick={() => closeModal()}>
        <IoClose size={32} />
      </CloseButton>

      <ModalWindowTitle>Login</ModalWindowTitle>
      <ModalWindowText>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </ModalWindowText>
      <FormWrapper>
        <Input id="email" type="email" placeholder="Email" />

        <Input id="password" type="password" placeholder="Password" />
        <SubmitButton type="submit">Log in</SubmitButton>
      </FormWrapper>
    </ModalWrapper>
  );
};
