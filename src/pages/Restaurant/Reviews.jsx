import React from 'react';

import styled from '@emotion/styled';

const Reviews = React.memo(({ reviews }) => {
  if (!reviews || !reviews.length) {
    return null;
  }

  return (
    <ul>
      {reviews.map((review) => (
        <Review key={review.id}>
          <Reviewer>
            {review.name}
          </Reviewer>
          <div>
            <Score>
              {review.score}
              점
            </Score>
          </div>
          <div>
            <Description>
              {review.description}
            </Description>
          </div>
        </Review>
      ))}
    </ul>
  );
});

const Review = styled.li({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',

  margin: '1rem 0',
  padding: '1rem',

  backgroundColor: '#F8F5F2',

  boxShadow:
    '0 3px 2px rgba(0, 0, 0, 0.05),0 7px 5px rgba(0, 0, 0, 0.05)',
});

const Reviewer = styled.div({
  color: '#FF8000',

  fontWeight: '500',
  marginBottom: '.5rem',
});

const Score = styled.span({
  fontWeight: '500',
});

const Description = styled.p({
  color: '#666666',
});

export default Reviews;
