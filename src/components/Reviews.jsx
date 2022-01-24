import React from 'react';

import Rating from 'react-rating';

import styled from '@emotion/styled';

import { Icon } from 'react-materialize';

function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const ReviewContainer = styled.div({
    background: '#009688',
    padding: '0.5em',
    marginBottom: '0.5em',
    borderRadius: 10,
    border: 'solid 1px yellow',
  });

  const ReviewHeader = styled.div({
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid black',
  });

  const Reviewer = styled.div({
    fontWeight: 100,
    fontSize: '1.5em',
    marginRight: '1em',
  });

  const ReviewScore = styled.div({
  });

  const ReviewDescription = styled.div({
    background: '#33ab9f',
    marginTop: '0.5em',
    paddingTop: '0.5em',
    paddingLeft: '1.5em',
    borderRadius: 10,
  });

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <ul>
      {sortedReviews.map((review) => (
        <li key={review.id}>
          <ReviewContainer>
            <ReviewHeader>
              <Reviewer>
                {review.name}
              </Reviewer>
              <ReviewScore>
                <Rating
                  emptySymbol={<Icon>star_border</Icon>}
                  fullSymbol={<Icon>star</Icon>}
                  initialRating={review.score > 5 ? 5 : review.score}
                  readonly
                />
              </ReviewScore>
            </ReviewHeader>

            <ReviewDescription>
              {review.description}
            </ReviewDescription>
          </ReviewContainer>
        </li>
      ))}
    </ul>
  );
}

export default React.memo(Reviews);
