import React from 'react';

import styled from '@emotion/styled';

function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const Review = styled.li({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    color: '#FFF5BA',
    backgroundColor: '#FFABAB',
    boxShadow: '12px 12px 2px 1px rgba(255,245,186,1)',
  });

  const Reviewer = styled.div({
    marginBottom: '.7em',

  });

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <ul>
      {sortedReviews.map((review) => (
        <Review key={review.id}>
          <Reviewer>
            {review.name}
          </Reviewer>
          <div>
            {review.score}
            점
          </div>
          <div>
            {review.description}
          </div>
        </Review>
      ))}
    </ul>
  );
}

export default React.memo(Reviews);
