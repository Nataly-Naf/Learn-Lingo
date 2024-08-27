const { default: styled } = require('styled-components');

export const TeachersInfoBlock = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
  top: 24px;
  left: 463px;
  gap: 16px;
`;

export const TeacherInfoPart = styled.div`
  display: flex;
  align-items: center;
`;
export const TeacherInfoName = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-right: 5px;
`;
export const TeacheInfoValue = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export const TeacheInfoGreenValue = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #38cd3e;
`;

export const TeacherInfoIcon = styled.svg`
  margin-right: 5px;
`;

export const Divider = styled.div`
  width: 1px;
  height: 16px;
  background-color: #121417;
  opacity: 0.2;
`;
