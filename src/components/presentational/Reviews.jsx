import styled from '@emotion/styled';

import React from 'react';

import { CardList } from '../../styles/List';
import { CardItem } from '../../styles/ListItem';

const User = styled.div({
  boxShadow: '2px 2px 2px 2px gray',
});

const UserInfomation = styled.div({
  backgroundColor: '#f2f2f2',
  padding: '.5em',
});

const UserReview = styled.div({
  flex: '1 1 auto',
  padding: '.5em',
  height: 0,
  paddingBottom: '20%',
  backgroundColor: 'lightgray',
});

const Reviews = React.memo(({ reviews }) => {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <CardList>
      {sortedReviews.map((review) => (
        <CardItem key={review.id}>
          <User>
            <UserInfomation>
              <div>
                {`사용자 : ${review.name}`}
              </div>
              <div>
                {`식당 점수 : ${review.score}`}
              </div>
            </UserInfomation>
            <UserReview>
              {`사용자 평 : ${review.description}`}
            </UserReview>
          </User>
        </CardItem>
      ))}
    </CardList>
  );
});

export default Reviews;
