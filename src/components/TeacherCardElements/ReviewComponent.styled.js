import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

export const ReviewsWrapper = styled.div`
  margin-bottom: 32px;
`;
export const ReviewWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;
export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledStarIcon = styled(FaStar)`
  width: 16px;
  fill: #ffc531;
  margin-right: 8px;
`;

export const NameWrapper = styled.div`
  gap: 2px;
`;

export const TextComment = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export const StyledRating = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export const ReviewerName = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #8a8a89;
  margin-botom: 2px;
`;
