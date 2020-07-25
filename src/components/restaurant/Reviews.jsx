import React from 'react';

import styled from '@emotion/styled';

import MenuList from '../MenuList';
import MenuItem from '../MenuItem';

import { darkBlue } from '../../assets/styles/colors';

const Wrapper = styled.div({
  width: '80%',
  margin: '0 auto',
  fontSize: '1.2em',
  '& h3': {
    color: darkBlue,
  },
});

const Reviews = React.memo(({ reviews }) => {
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
});

export default Reviews;
