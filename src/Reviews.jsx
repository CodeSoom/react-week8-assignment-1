import React from 'react';

import styled from '@emotion/styled';

import { colors } from './designSystem';

const List = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  flexFlow: 'wrap',
  justifyContent: 'space-between',
  padding: '2em 3em',
});

const Item = styled.li({
  width: '30%',
  margin: '.5em',
  padding: '1em 2em',
  border: `1px solid ${colors.highlight}`,
  borderRadius: '10px',
  boxShadow: '0.4em 0.4em .4em rgba(100, 100, 100, 0.3)',
});

const Name = styled.div({
  display: 'block',
  fontSize: '1.3em',
  fontWeight: 500,
  padding: '.2em 0',
});

const Score = styled.div({
  fontSize: '1.3em',
  fontWeight: 500,
  padding: '.2em 0',
  color: colors.highlight,
  '& span': {
    padding: '.2em .25em',
    color: colors.black,
  },
});

const Description = styled.div({
  fontSize: '1em',
  padding: '1em 0',
  heigth: '2em',
  color: colors.gray,
  overflow: 'auto',
  textOverflow: 'ellipsis',
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
          <Name>
            {review.name}
          </Name>
          <Score>
            {review.score}
            <span>
              점
            </span>
          </Score>
          <Description>
            {review.description}
          </Description>
        </Item>
      ))}
    </List>
  );
}

export default React.memo(Reviews);
