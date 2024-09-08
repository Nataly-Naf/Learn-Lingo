import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const ModalwindowWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10000;
  transform: translate(-50%, -50%);
  width: 90%;
  overflow-y: auto;
  background-color: white;
  padding: 20px;
  @media (min-width: 768px) {
    width: 600px;
    padding: 64px;
  }
`;
export const TitleText = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
`;

export const SupportText = styled.p`
  margin-bottom: 20px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
export const TeacherText = styled.p`
  color: #8a8a89;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 4px;
`;
export const TeacherNameText = styled.p`
  font-weight: 600;
`;
export const TeacherWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;
export const StyledAvatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 14px;
`;

export const QuestionTitleText = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 600;
`;
export const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;
  font-size: 16px;

  input {
    margin-top: 0;
    margin-right: 10px;
  }

  /* This targets the radio button */
  input[type='radio'] {
    appearance: none; /* Remove default styling */
    width: 20px;
    height: 20px;
    border: 2px solid #ccc; /* Customize outer circle */
    border-radius: 50%;
    position: relative;
  }

  /* Styling for the selected radio button */
  input[type='radio']:checked {
    border-color: var(--dark-color);
  }

  /* Add custom inner circle for checked state */
  input[type='radio']:checked::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background-color: var(--dark-color);
    border-radius: 50%;
  }
`;
export const FieldWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`;
export const InputField = styled.input`
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 16px;
`;
