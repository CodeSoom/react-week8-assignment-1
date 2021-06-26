import React from 'react';

import styled from '@emotion/styled';

import colors from './style/colors';

const ReviewBox = styled.div({
  margin: '0 auto',
  width: '35em',
  textAlign: 'center',
});

const List = styled.ul({
  display: 'flex',
  flexWrap: 'wrap',
  borderRadius: '1em',
  backgroundColor: `${colors.box}`,
  textAlign: 'center',
});

const Item = styled.li({
  width: '15em',
  height: '20em',
  margin: '1.2em',
  padding: '.4em',
  borderRadius: '1em',
  boxShadow: `1em 1em .5em ${colors.box}`,
  fontSize: '.5em',
  backgroundColor: `${colors.basic}`,
  textAlign: 'center',
  '& div': {
    display: 'inline-block',
    width: '10em',
    margin: '.4em auto',
    padding: '.2em',
  },
});

const Description = styled.div({
  height: '10em',
  padding: '.2em',
  overflow: 'scroll',
});

function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <ReviewBox>
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
            <Description>
              {review.description}
            </Description>
          </Item>
        ))}
      </List>
    </ReviewBox>
  );
}

export default React.memo(Reviews);
