import React from 'react';
import styled from '@emotion/styled';

function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <ul>
      {sortedReviews.map((review) => (
        <Review key={review.id}>
          <section className="top">
            <h1>
              {review.name}
            </h1>
            <p>
              {review.score}
              점
            </p>
          </section>
          <section className="bottom">
            {review.description}
          </section>
        </Review>
      ))}
    </ul>
  );
}

const Review = styled.li({
  display: 'flex',
  flexDirection: 'column',

  marginBottom: '5px',
  padding: '10px',
  borderRadius: '10px',

  backgroundColor: '#B2EBF4',

  color: '#FFFFFF',
  '.top': {
    display: 'flex',
    marginBottom: '10px',
    '& p': {
      display: 'flex',
      alignItems: 'center',
      marginLeft: '10px',
      color: '#FFFF36',
    },

  },

  '.bottom': {
  },
});

export default React.memo(Reviews);
