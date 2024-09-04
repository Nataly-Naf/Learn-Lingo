import styled from 'styled-components';

export const AvatarPicture = styled.img`
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
  border: 3px solid var(--dark-color);
`;
