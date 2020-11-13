import React from 'react';

import ReviewWrapper from './styles/ReviewWrapper';

function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <ReviewWrapper>
      <ul>
        {sortedReviews.map((review) => (
          <li key={review.id}>
            <div>
              {review.description}
            </div>
            <div>
              {`${review.score}점 - ${review.name}`}
            </div>
          </li>
        ))}
      </ul>
    </ReviewWrapper>
  );
}

export default React.memo(Reviews);
