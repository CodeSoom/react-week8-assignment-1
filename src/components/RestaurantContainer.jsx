import { useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';

import {
  loadRestaurant,
  changeReviewField,
  sendReview,
} from '../slice';

import { get } from '../utils';

// const SectionContainer = styled.div`
//   display: flex;
//   @media screen and (min-width: 412px) {
//     flex-direction:column;
//   }
// `

const SectionContainer = styled.div({
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  '@media screen and (max-width: 600px)': {
    flexDirection: 'column',
  },
});

const DetailSection = styled.div({
  minWidth: '50%',
  flex: '5 ',
});

const ReviewSection = styled.div({
  background: '#009688',
  padding: '0 0.2em',
  minWidth: '50%',
  flex: '5',
});

const ReviewSectionHeader = styled.div({
  background: '#00695f',
  padding: '0.2em',
  fontSize: '30px',
  fontWeight: '600',
});
export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const accessToken = useSelector(get('accessToken'));
  const restaurant = useSelector(get('restaurant'));
  const reviewFields = useSelector(get('reviewFields'));

  const handleChange = useCallback(({ name, value }) => {
    dispatch(changeReviewField({ name, value }));
  }, [dispatch]);

  const handleSubmit = useCallback(() => {
    dispatch(sendReview({ restaurantId }));
  }, [dispatch, restaurantId]);

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <SectionContainer>
      <DetailSection>
        <RestaurantDetail restaurant={restaurant} />
      </DetailSection>
      <ReviewSection>
        <ReviewSectionHeader>
          리뷰 남기기
        </ReviewSectionHeader>
        {accessToken ? (
          <ReviewForm
            fields={reviewFields}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        ) : null}
        <Reviews reviews={restaurant.reviews} />
      </ReviewSection>
    </SectionContainer>
  );
}
