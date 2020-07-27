import React from 'react';

import { DetailMenuList, DetailMenuItem, ReviewStar } from '../styles';

const star = ['★☆☆☆☆', '★★☆☆☆', '★★★☆☆', '★★★★☆', '★★★★★'];
function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <DetailMenuList>
      {sortedReviews.map((review) => (
        <DetailMenuItem key={review.id}>
          <div>
            {review.name}
            (
            <ReviewStar>
              {Number(review.score) < 5 ? star[review.score - 1] : star[4]}
            </ReviewStar>
            )
          </div>
          <div>
            {review.description}
          </div>
        </DetailMenuItem>
      ))}
    </DetailMenuList>
  );
}

export default React.memo(Reviews);
