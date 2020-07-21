import React from 'react';

import styled from '@emotion/styled';

import MenuList from './MenuList';
import MenuItem from './MenuItem';

const Wrapper = styled.div({
  width: '80%',
  margin: '0 auto',
  fontSize: '1.2em',
  '& h3': {
    color: '#364f6b',
  },
});

export default function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <Wrapper>
      <h3>리뷰</h3>
      <MenuList>
        {sortedReviews.map((review) => (
          <MenuItem key={review.id}>
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
          </MenuItem>
        ))}
      </MenuList>
    </Wrapper>
  );
}
