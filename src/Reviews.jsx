import React from 'react';

import styled from '@emotion/styled';

const Review = styled.ul(({ accessToken }) => ({
  overflow: 'scroll',
  height: accessToken ? '230px' : '362px',
  listStyle: 'none',
  padding: '0',
  '& li': {
    padding: '10px 20px',
    borderBottom: '3px solid black',
    '& div:nth-of-type(1)': {
      display: 'flex',
      alignItems: 'center',
      fontSize: '15px',
      '& div:nth-of-type(2)': {
        color: 'white',
        fontSize: '15px',
        backgroundColor: 'teal',
        padding: '0 5px',
        border: '2px solid black',
        borderRadius: '4px',
        margin: '0 3px',
      },
    },
    '& div:nth-of-type(2)': {
      fontSize: '15px',
      wordWrap: ' break-word',
    },
  },
}));

function Reviews({ accessToken, reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <Review accessToken={accessToken}>
      {sortedReviews.map((review) => (
        <li key={review.id}>
          <div>
            <div>
              {review.name}
            </div>
            <div>
              {review.score}
              점
            </div>
          </div>
          <div>
            {review.description}
          </div>
        </li>
      ))}
    </Review>
  );
}

export default React.memo(Reviews);
