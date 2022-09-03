import { memo } from 'react';

import styled from '@emotion/styled';

const List = styled.ul({
  width: '500px',
});

const Item = styled.li({
  padding: '10px 0 10px 0',
  wordWrap: 'normal',
  '&:not(:last-child)': {
    borderBottom: '1px solid #CCC',
  },
});

const DescriptionItem = styled.div({
  marginTop: '10px',
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
            {review.name}
          </div>
          <div>
            {review.score}
            점
          </div>
          <DescriptionItem>
            {review.description}
          </DescriptionItem>
        </Item>
      ))}
    </List>
  );
});

export default Reviews;
