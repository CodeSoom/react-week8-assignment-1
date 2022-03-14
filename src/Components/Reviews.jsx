import { memo } from 'react';

import styled from '@emotion/styled';

const ReviewsContainer = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
  padding: '.4em 0',
  listStyle: 'none',
  width: '200px',
});

const ReviewItem = styled.li({
  marginBottom: '.5em',
  border: '1px solid',
});

const ReviewNama = styled.div({
  fontWeight: 'bold',
  borderBottom: '.5px solid',
});

const ReviewDescription = styled.div({
  border: '1px solid',
  padding: '1rem',
  margin: '1px',
});

function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <ReviewsContainer>
      {sortedReviews.map((review) => (
        <ReviewItem key={review.id}>
          <ReviewNama>
            {review.name}
          </ReviewNama>
          <div>
            {review.score}
            점
          </div>
          <ReviewDescription>
            {review.description}
          </ReviewDescription>
        </ReviewItem>
      ))}
    </ReviewsContainer>
  );
}

export default memo(Reviews);
