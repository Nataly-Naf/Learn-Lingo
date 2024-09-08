import styled from 'styled-components';

export const LevelButtonWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  margin-bottom: 20px;
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
