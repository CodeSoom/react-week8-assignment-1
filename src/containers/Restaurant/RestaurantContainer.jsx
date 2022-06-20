import { useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from '../../pages/RestaurantDetail/RestaurantDetail';
import ReviewForm from '../../pages/ReviewForm/ReviewForm';
import Reviews from '../../pages/Reviews/Reviews';

import {
  loadRestaurant,
  changeReviewField,
  sendReview,
} from '../../redux/slice';

import { get } from '../../utils/utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const accessToken = useSelector(get('accessToken'));
  const restaurant = useSelector(get('restaurant'));
  const reviewFields = useSelector(get('reviewFields'));

  const handleChange = useCallback(
    ({ name, value }) => {
      dispatch(changeReviewField({ name, value }));
    },
    [dispatch],
  );

  const handleSubmit = useCallback(() => {
    dispatch(sendReview({ restaurantId }));
  }, [dispatch, restaurantId]);

  if (!restaurant) {
    return <p>Loading...</p>;
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