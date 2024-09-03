import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

export const StyledButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: transparent;
  border: none;
`;

export const StyledIcon = styled(FaHeart)`
  color: red;
`;

export const CardWrapper = styled.div`
  position: relative;
  width: 1184px;
  box-sizing: border-box;
  margin: 0 auto;
  height: auto;
  border-radius: 24px;
  padding: 24px 24px 24px 192px;
`;

export const StyledLink = styled(Link)`
  color: #121417;
  font-size: 16px;
  font-weight: 600;
`;
export const LevelButtonWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  gap: 8px;
`;
export const LevelButton = styled.button`
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 25px;
  border: solid 1px #8a8a89;

  &:hover {
    background-color: #ffc531;
    border: none;
  }
`;
export const ExperienceText = styled.p`
  margin-bottom: 32px;
`;
