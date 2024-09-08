import styled from 'styled-components';

export const BlockWrapper = styled.div`
  width: 90%;
  box-sizing: border-box;
  background-color: #f8f8f8;
  padding: 20px;
  margin: 0 auto;
  margin-bottom: 20px;

  border-radius: 30px;
  @media (min-width: 768px) {
    width: 720px;
    // height: 530px;
    padding-left: 64px;
    padding-top: 98px;
    padding-right: 108px;
    margin-bottom: 0;
  }
`;

export const StyledTitle = styled.h1`
  margin: 0;
  font-size: 48px;
  font-weight: 500;
  letter-spacing: -0.03em;
  margin-bottom: 32px;
`;

export const SelectedText = styled.span`
  font-style: italic;
  font-size: 48px;
  font-weight: 400;

  background-color: var(--dark-color);
  border-radius: 10px;
  padding-left: 5px;
  padding-right: 5px;
  letter-spacing: -0.03em;
`;

export const StyledText = styled.p`
  margin-bottom: 64px;
`;
