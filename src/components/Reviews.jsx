import React from 'react';

import {
  ReviewList, ReviewItem,
  Score, Description, Reviewer,
} from '../styles/Reviews';

function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <ReviewList>
      {sortedReviews.map((review) => (
        <ReviewItem key={review.id}>
          <Score>
            <span>
              {review.score}
              점
            </span>
          </Score>
          <Description>
            {review.description}
          </Description>
          <Reviewer>
            {'- '}
            {review.name}
          </Reviewer>
        </ReviewItem>
      ))}
    </ReviewList>
  );
}

export default React.memo(Reviews);
