import React from 'react';

import ReviewList from '../styles/ReviewList';
import ReviewItem from '../styles/ReviewItem';

export default function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <ReviewList>
      {sortedReviews.map((review) => (
        <ReviewItem key={review.id}>
          <h4>
            {review.score}
            점
          </h4>
          <p>
            {review.description}
          </p>
          <div>
            {review.name}
          </div>
        </ReviewItem>
      ))}
    </ReviewList>
  );
}
