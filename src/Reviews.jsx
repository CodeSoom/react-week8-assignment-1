import React from 'react';

import styled from '@emotion/styled';

function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  const List = styled.ul({
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem',
    maxHeight: '30rem',
    overflowY: 'scroll',
  });

  const ListItem = styled.li({
    display: 'flex',
    alignItems: 'center',
    padding: '1em',
    width: '49%',
    border: '1px solid #dcdcdc',
    boxSizing: 'border-box',
  });

  const Name = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '5em',
    height: '5em',
    border: '1px solid #dcdcdc',
    borderRadius: '50%',
  });

  const TextBox = styled.div({
    marginLeft: '1rem',
    '& > * + *': {
      marginTop: '1rem',
    },
  });

  return (
    <List>
      {sortedReviews.map((review) => (
        <ListItem key={review.id}>
          <Name>
            {review.name}
          </Name>
          <TextBox>
            <p>
              {review.score}
              점
            </p>
            <p>
              {review.description}
            </p>
          </TextBox>
        </ListItem>
      ))}
    </List>
  );
}

export default React.memo(Reviews);
