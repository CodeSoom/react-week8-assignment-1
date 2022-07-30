import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { restaurantSelector, loadRestaurant } from './features/restaurant/restaurantSlice';

import {
  accessTokenSelector,
} from './features/login/loginSlice';

import { reviewFieldsSelector } from './features/review/reviewSlice';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';

import {
  changeReviewField,
  sendReview,
} from './actions';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const accessToken = useSelector(accessTokenSelector);
  const restaurant = useSelector(restaurantSelector);
  const reviewFields = useSelector(reviewFieldsSelector);

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  function handleChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleSubmit() {
    dispatch(sendReview({ restaurantId }));
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      {accessToken ? (
        <ReviewForm
          fields={reviewFields}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      ) : null}
      <Reviews reviews={restaurant.reviews} />
    </>
  );
}
