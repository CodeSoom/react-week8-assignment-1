import React from 'react';

import styled from '@emotion/styled';

import Details from './Details';

const ReviewList = styled.ul({
  listStyle: 'none',
  padding: 0,
  maxHeight: '160px',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-evenly',
  overflow: 'auto',
  '& li': {
    flex: '1 1 40%',
    margin: '.5em',
    padding: '1em',
    border: '1px solid #ddd',
    boxShadow: '1px 1px 3px #cecece',

  },
});

function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <Details>
      <ReviewList>
        {sortedReviews.map((review) => (
          <li key={review.id}>
            <div>
              {review.name}
            </div>
            <div>
              {review.score}
              점
            </div>
            <div>
              {review.description}
            </div>
          </li>
        ))}
      </ReviewList>
    </Details>
  );
}

export default React.memo(Reviews);
