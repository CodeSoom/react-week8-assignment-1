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

const Container = styled.div({
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
          <Container>
            {review.name}
          </Container>
          <Container>
            {review.score}
            점
          </Container>
          <Container>
            {review.description}
          </Container>
        </Item>
      ))}
    </List>
  );
}

export default memo(Reviews);
