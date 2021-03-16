import React from 'react';

import { sortById } from './utils';

const Reviews = React.memo(({ reviews }) => {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort(sortById);

  return (
    <ul>
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
    </ul>
  );
});

export default Reviews;
