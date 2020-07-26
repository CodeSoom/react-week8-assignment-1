import React from 'react';

import styled from '@emotion/styled';

const Description = styled.p({
  fontWeight: 'bold',
});

function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <ul>
      {sortedReviews.map((review) => (
        <li key={review.id}>
          <div>
            {review.name}
            {' / '}
            {review.score}
            점
          </div>
          <div>
            <Description>{review.description}</Description>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default React.memo(Reviews);
