import React from 'react';

import styled from '@emotion/styled';

const StyledReview = styled.li`
  list-style-type: none;
  background-color: #f1c40f;
  margin-bottom: 15px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const StyledReviews = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const Reviews = ({ reviews }) => {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <StyledReviews>
      {sortedReviews.map((review) => (
        <StyledReview key={review.id}>
          <h2>
            {review.name}
            {' '}
            /
            {' '}
            {review.score}
            점
          </h2>
          <div>
            {review.description}
          </div>
        </StyledReview>
      ))}
    </StyledReviews>
  );
};

export default React.memo(Reviews);
