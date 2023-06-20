import React from 'react';

import styled from '@emotion/styled';

const Wrapper = styled.div`
  background-color: #fff;
  padding: 2rem 0 2rem 3rem;
  border: 2px solid #797979;
  border-radius: 42px;
  list-style:none;
  & li{
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #ddd;
  }
`;

function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  function changeNumberToStar(number) {
    if (number < 1) return '⭐️'.repeat(1);

    if (number > 5) return '⭐️'.repeat(5);

    return '⭐️'.repeat(number);
  }

  return (
    <Wrapper>
      {sortedReviews.map((review) => (
        <li key={review.id}>
          <div>
            {review.name}
          </div>
          <div>
            {changeNumberToStar(review.score)}
          </div>
          <div>
            {review.description}
          </div>
        </li>
      ))}
    </Wrapper>
  );
}

export default React.memo(Reviews);
