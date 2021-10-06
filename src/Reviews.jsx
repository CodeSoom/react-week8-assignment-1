import React from 'react';

import styled from '@emotion/styled';

const List = styled.ul({
  listStyle: 'none',
  padding: '0',
  margin: '0',
});

const Item = styled.li({
  marginBottom: '10px',
  backgroundColor: '#EEE',
  borderRadius: '15px',
  '& div': {
    padding: '5px 10px',
    '&:first-of-type': {
      color: '#2ecc71',
      fontWeight: '600',
    },
  },
});

function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <List>
      {sortedReviews.map((review) => (
        <Item key={review.id}>
          <div>
            rating:
            {' '}
            {review.score}
          </div>
          <div>
            {review.name}
          </div>
          <div>
            {review.description}
          </div>
        </Item>
      ))}
    </List>
  );
}

export default React.memo(Reviews);
