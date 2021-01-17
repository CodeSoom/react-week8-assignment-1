import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  position: 'absolute',
  top: '20%',
  width: '60%',
  height: 'auto',
  marginTop: '1em',
  zIndex: '-10',
  marginBottom: '50px',
  '& ul li': {
    padding: '1em',
  },
});

function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <Container>
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
    </Container>
  );
}

export default React.memo(Reviews);
