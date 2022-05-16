import styled from '@emotion/styled';

import { memo } from 'react';

const List = styled.ul({
  listStyle: 'none',
  padding: '0',
  margin: '0 0.5em',
});

const Item = styled.li({
  margin: '0.5em',
  display: 'flex',
});

const ReviewProperty = styled.div({
  margin: '0 1em',
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
          <ReviewProperty>
            {review.name}
          </ReviewProperty>
          <ReviewProperty>
            {review.score}
            점
          </ReviewProperty>
          <ReviewProperty>
            {review.description}
          </ReviewProperty>
        </Item>
      ))}
    </List>
  );
}

export default memo(Reviews);
