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
  backgroundColor: `${colors.background_gray}`,
  textAlign: 'center',
});

const Item = styled.li({
  width: '15em',
  height: '20em',
  margin: '1.2em',
  padding: '.4em',
  borderRadius: '1em',
  boxShadow: `.5em .5em .2em ${colors.button_gray020}`,
  fontSize: '.5em',
  backgroundColor: `${colors.base_white}`,
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
        {sortedReviews.map(({
          id, name, score, description,
        }) => (
          <Item key={id}>
            <div>
              {name}
            </div>
            <div>
              {score}
              점
            </div>
            <Description>
              {description}
            </Description>
          </Item>
        ))}
      </List>
    </ReviewBox>
  );
}

export default React.memo(Reviews);
