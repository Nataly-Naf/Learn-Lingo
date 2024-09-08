import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1312px;
  margin: 0 auto;
  gap: 100px;
  justify-content: center;
  border: 2px dashed var(--dark-color);
  border-radius: 30px;
  margin-top: 22px;
  padding: 20px;

  @media (max-width: 768px) {
    max-width: 90%;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    height: auto;
    padding: 20px;
  }
`;
