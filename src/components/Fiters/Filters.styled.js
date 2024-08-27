import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #8a8a89;
`;
export const FiltersWrapper = styled.div`
  display: flex;
  margin-bottom: 32px;
  gap: 20px;
`;
export const Input = styled.select`
  // width: 221px;
  // height: 48px;
  padding: 14px 148px 14px 18px;
  border-radius: 14px;
  background-color: white;
  appearance: none;
`;

export const StyledOption = styled.option`
  margin-right: 115px;
  font-size: 14px;
  font-weight: 600;
  color: grey;
`;
