import React from 'react';

import styled from '@emotion/styled';

const Items = styled.li({
  width: '100%',
  marginBottom: '1.2rem',
});

function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <ul>
      {sortedReviews.map((review) => (
        <Items key={review.id}>
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
        </Items>
      ))}
    </ul>
  );
}

export default React.memo(Reviews);
