import React from 'react';

import styled from '@emotion/styled';

const Subtitle = styled.h3({
  fontFamily: '"Song Myung", serif',
  fontSize: '30px',
  margin: '10px 20px',
  marginTop: '10px',
  color: '#F9FDFC',
  opacity: '0.8',
  textAlign: 'center',
});

const ReviewList = styled.ul({
  width: '60%',
  height: '150px',
  listStyle: 'none',
  padding: 0,
  margin: '0 auto',
  overflow: 'scroll',
  '&::-webkit-scrollbar': {
    backgroundColor: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: '10px',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },
  '&::-webkit-scrollbar-corner': {
    backgroundColor: 'transparent',
  },
});

const ReviewItem = styled.li({
  borderRadius: '5px',
  boxShadow: '0px 0px 5px white',
  background: 'rgba(255, 255, 255, 0.5)',
  margin: '5px 7px',
  fontFamily: '"Song Myung", serif',
  color: '#5B4230',
  padding: '20px',
});

export default function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <div>
      <Subtitle>리뷰</Subtitle>
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
    </div>
  );
}
