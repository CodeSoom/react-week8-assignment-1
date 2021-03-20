import React from 'react';

import styled from '@emotion/styled';

import green from '../fixtures/color';

import { PageBody } from './style/layout';

const List = styled.ul({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '5rem 2.6%',
});

const ListItem = styled.li({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  boxSizing: 'border-box',
  width: '23%',
  padding: '4em 1em 1em',
  borderRadius: '1rem',
  border: '1px solid #dcdcdc',
  textAlign: 'center',
  lineHeight: '1.5',
});

const Name = styled.div({
  position: 'absolute',
  top: '-2.5em',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  width: '5em',
  height: '5em',
  borderRadius: '50%',
  color: '#fff',
  border: '1px solid #dcdcdc',
  background: '#248a78',
});

const TextBox = styled.div({
  '& > * + *': {
    marginTop: '1rem',
  },
  '& p': {
    wordBreak: 'break-word',
  },
});

const Score = styled.p({
  fontSize: '0.9rem',
  display: 'inline-block',
  padding: '0.2em 1em',
  borderRadius: '1rem',
  border: `1px solid ${green}`,
  color: `${green}`,
});

function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <PageBody>
      <List>
        {sortedReviews.map((review) => (
          <ListItem key={review.id}>
            <Name>
              {review.name}
            </Name>
            <TextBox>
              <Score>
                {review.score}
                점
              </Score>
              <p>
                {review.description}
              </p>
            </TextBox>
          </ListItem>
        ))}
      </List>
    </PageBody>
  );
}

export default React.memo(Reviews);
