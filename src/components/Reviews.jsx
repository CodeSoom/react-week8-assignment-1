import React from 'react';

function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <>
      <h2>리뷰</h2>
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
    </>
  );
}

export default React.memo(Reviews);
