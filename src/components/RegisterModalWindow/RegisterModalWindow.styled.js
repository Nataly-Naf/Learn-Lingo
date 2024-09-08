import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;
export const ModalWrapper = styled.div`
  position: absolute;
  z-index: 10000;
  background-color: white;
  padding: 30px;
  border-radius: 30px;
  width: 90%;
  @media (min-width: 1220px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 566px;
    padding: 64px;
  }
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
