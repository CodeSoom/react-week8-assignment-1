import React from 'react';

import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import MenuTitle from '../../styles/MenuTitle';

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const ReviewItem = styled.li`
  display: flex;
  margin: 1.5rem 0;
  border-bottom: 1px solid #e0e0e0;
  padding: 1.5rem;

  &:last-child {
    border: none;
  }
`;

const Reviewer = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  & div {
    text-align: center;
    margin-top: 1rem;
  }
`;

const ReviewComment = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 2rem;
`;

function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  function changeStar(number) {
    if (number < 1) return '⭐️'.repeat(1);

    if (number > 5) return '⭐️'.repeat(5);

    return '⭐️'.repeat(number);
  }

  return (

    <Container>
      <MenuTitle>
        리뷰
        {' '}
        (
        {sortedReviews.length}
        )
      </MenuTitle>
      <ul>
        {sortedReviews.map((review) => (
          <ReviewItem key={review.id}>
            <Reviewer>
              <FontAwesomeIcon icon={faUserCircle} size="2x" />
              <div>
                {review.name}
              </div>
            </Reviewer>
            <ReviewComment>
              <div>
                {changeStar(review.score)}
              </div>
              <div>
                {review.description}
              </div>
            </ReviewComment>
          </ReviewItem>
        ))}
      </ul>
    </Container>
  );
}

export default React.memo(Reviews);
