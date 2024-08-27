import React from 'react';
import Avatar from 'react-avatar';
import {
  ReviewWrapper,
  RatingWrapper,
  NameWrapper,
  StyledStarIcon,
  TextComment,
  ReviewsWrapper,
  StyledRating,
  ReviewerName,
} from './ReviewComponent.styled';
export const ReviewComponent = ({ review }) => {
  return (
    <ReviewsWrapper>
      <ReviewWrapper>
        <Avatar name={review.reviewer_name} round={true} size="44" />

        <NameWrapper>
          <ReviewerName>{review.reviewer_name}</ReviewerName>
          <RatingWrapper>
            <StyledStarIcon />
            <StyledRating>{review.reviewer_rating}</StyledRating>
          </RatingWrapper>
        </NameWrapper>
      </ReviewWrapper>
      <TextComment>{review.comment}</TextComment>
    </ReviewsWrapper>
  );
};
