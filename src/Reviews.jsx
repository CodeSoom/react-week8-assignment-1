import React from 'react';

import styled from '@emotion/styled';

const Subtitle = styled.h3({
  margin: '10px 20px',
  marginTop: '10px',
  opacity: '0.8',
  color: '#F9FDFC',
  fontSize: '30px',
  fontFamily: '"Song Myung", serif',
  textAlign: 'center',
});

const ReviewList = styled.ul({
  width: '60%',
  padding: 0,
  margin: '0 auto',
  height: '150px',
  listStyle: 'none',
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
  margin: '5px 7px',
  padding: '20px',
  background: 'rgba(255, 255, 255, 0.5)',
  borderRadius: '5px',
  boxShadow: '0px 0px 5px white',
  color: '#5B4230',
  fontFamily: '"Song Myung", serif',
});

function Reviews({ reviews }) {
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

export default React.memo(Reviews);
