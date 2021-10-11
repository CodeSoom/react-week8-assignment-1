import { memo } from 'react';

import styled from '@emotion/styled';

const List = styled.ul({
  listStyle: 'none',
  margin: '0',
  padding: '0',
});

const Item = styled.li({
  marginBottom: '.8em',
  borderRadius: '.5em',
  backgroundColor: '#EEE',
  '& div': {
    padding: '.3em .6em',
    '&:first-of-type': {
      fontWeight: '600',
      color: '#2ecc71',
    },
  },
});

const Reviews = memo(({ reviews }) => {
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
});

export default Reviews;
