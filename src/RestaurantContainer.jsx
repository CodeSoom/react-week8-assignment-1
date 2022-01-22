import styled from '@emotion/styled';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';

import {
  loadRestaurant,
  changeReviewField,
  sendReview,
} from './slice';

import { get } from './utils';

import Container from './styles/Container';
import Information from './styles/Information';

const MainContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '24px 18px',
  height: '100vh',
  width: '100vw',
  backgroundColor: 'rgba(66,66,66, 0.5)',
});

const TopBox = styled.div({

});

const MiddleBox = styled.div({

});

const BottomBox = styled.div({

});

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const accessToken = useSelector(get('accessToken'));
  const restaurant = useSelector(get('restaurant'));
  const reviewFields = useSelector(get('reviewFields'));

  if (!restaurant) {
    return (
      <Container>
        <Information>Loading...</Information>
      </Container>
    );
  }

  function handleChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleSubmit() {
    dispatch(sendReview({ restaurantId }));
  }

  return (
    <MainContainer>
      <TopBox>
        <RestaurantDetail restaurant={restaurant} />
      </TopBox>
      {accessToken ? (
        <MiddleBox>
          <ReviewForm
            fields={reviewFields}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </MiddleBox>
      ) : null}
      <BottomBox>
        <Reviews reviews={restaurant.reviews} />
      </BottomBox>
    </MainContainer>
  );
}
