import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  background-color: white;
  top: 300px;
  left: 300px;
  width: 566px;
  //   height: 506px;
  border: 2px solid red;
  padding: 64px;
  border-radius: 30px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
`;

export const ModalWindowTitle = styled.h2`
  font-size: 40px;
  margin: 0;
`;

export const ModalWindowText = styled.p`
  margin-top: 20px;
`;
export const FormWrapper = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #f4c550;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: #ffdc86;
  }
`;
