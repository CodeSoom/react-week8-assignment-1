import React from 'react';

import List from '../styles/ReviewtList';
import Item from '../styles/ReviewItem';

function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <List>
      {sortedReviews.map((review) => (
        <Item key={review.id}>
          <div>
            <span>{review.name}</span>
            <span>
              {review.score}
              점
            </span>
          </div>
          <div>
            {review.description}
          </div>
        </Item>
      ))}
    </List>
  );
}


export default React.memo(Reviews);
