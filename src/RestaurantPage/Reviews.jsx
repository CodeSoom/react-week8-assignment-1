import { memo } from 'react';

import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ReviewTitle = styled.h3({
  marginTop: '20px',
  color: '#555',
  fontSize: '18px',
});

const ReviewList = styled.ul({
  paddingTop: '20px',
  listStyle: 'none',

  '& li': {
    display: 'flex',
    padding: '15px 0',
    borderBottom: '1px solid #DBDBDB',
    cursor: 'pointer',
  },
});

const Reviewer = styled.div({
  margin: '0 35px 0 8px',
  textAlign: 'center',

  '& div': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5px',
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    backgroundColor: '#dbdbdb;',
    fontSize: '30px',
  },
});

const ReviewScore = styled.p({
  marginBottom: '10px',
});

export default memo(({ reviews }) => {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  function changeNumberToStars(number) {
    if (number < 1) return '⭐️'.repeat(1);

    if (number > 5) return '⭐️'.repeat(5);

    return '⭐️'.repeat(number);
  }

  return (
    <>
      <ReviewTitle>
        리뷰 (
        {sortedReviews.length}
        )
      </ReviewTitle>
      <ReviewList>
        {sortedReviews.map((review) => (
          <li key={review.id}>
            <Reviewer>
              <div>
                <FontAwesomeIcon icon={faUser} />
              </div>
              {review.name}
            </Reviewer>
            <div>
              <ReviewScore>
                {changeNumberToStars(review.score)}
              </ReviewScore>
              <div>
                {review.description}
              </div>
            </div>
          </li>
        ))}
      </ReviewList>
    </>
  );
});
