import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
  width: 1184 px;
  height: auto;
  border: 2px solid red;
  border-radius: 24px;
  padding-left: 192px;
  padding-top: 24px;
`;
export const TeachersNameWrapper = styled.div`
  display: flex;
`;
export const TeachersName = styled.h1`
  font-size: 24px;
  margin-right: 5px;
`;
export const Avatar = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  border-radius: 50%;
  left: 24px;
  top: 24px;
  border: 3px solid #fbe9ba;
`;

export const TeachersInfoBlock = styled.div`
  display: flex;
  position: absolute;
  top: 24px;
  left: 463px;
`;

export const MainInfoWrapper = styled.div`
  display: flex;
  //   align-items: center;
  margin-bottom: 8px;
`;
export const InfoName = styled.p`
  font-weight: 500;
  color: #8a8a89;
  margin: 0;
`;
export const InfoDescription = styled.p`
  font-weight: 500;
  color: #121417;
  margin: 0;
  margin-left: 5px;
`;
