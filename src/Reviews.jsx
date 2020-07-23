import React from 'react';

import styled from '@emotion/styled';

const ReviewList = styled.ul({
  display: 'block',
  margin: 0,
  padding: '.4em 0',
  listStyle: 'none',
});

const ReviewItem = styled.li({
  marginRight: '1em',
  padding: '.4em 1em',
  borderBottom: '1px solid #CCC',
  background: 'transparent',
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <ReviewList>
      {sortedReviews.map((review) => (
        <ReviewItem key={review.id}>
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
        </ReviewItem>
      ))}
    </ReviewList>
  );
}
