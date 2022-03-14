import { memo } from 'react';

export default memo(({ reviews }) => {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <ul>
      {sortedReviews.map((review) => (
        <li key={review.id}>
          <div>{review.name}</div>
          <div>
            {review.score}
            점
          </div>
          <div>{review.description}</div>
        </li>
      ))}
    </ul>
  );
});
