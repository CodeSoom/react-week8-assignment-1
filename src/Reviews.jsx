import React from 'react';

import styled from '@emotion/styled';

const List = styled.ul({
  display: 'table',
  marginLeft: 'auto',
  marginRight: 'auto',
  listStyle: 'none',
  '& h3': {
    padding: '1em',
    textAlign: 'center',
  },
});

const Item = styled.li({
  display: 'flex',
  '& div': {
    margin: '1em 1em',
  },
});

function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <List>
      <h3>리뷰</h3>
      {sortedReviews.map((review) => (
        <Item key={review.id}>
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
        </Item>
      ))}
    </List>
  );
}

// Reviews 컴포넌트가 pure 컴포넌트로 export
// 값이 바뀔 때만 가상 DOM이 바뀌도록
// 그 외는 cache되어 있는 것만 나오도록
export default React.memo(Reviews);
