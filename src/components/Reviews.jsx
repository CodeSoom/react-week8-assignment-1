import React, { memo } from 'react';

import {
  ListItem,
  Reviewer,
  ReviewerName,
} from '../layouts/Restaurant';

function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <ul>
      {sortedReviews.map((review) => (
        <ListItem key={review.id}>
          <Reviewer>
            <ReviewerName>{review.name}</ReviewerName>
            <span>
              {review.score}
              점
            </span>
          </Reviewer>
          <div>
            {review.description}
          </div>
        </ListItem>
      ))}
    </ul>
  );
}

export default memo(Reviews);
