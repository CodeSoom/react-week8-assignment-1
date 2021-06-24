import { useEffect, useCallback } from 'react';

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

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const accessToken = useSelector(get('accessToken'));
  const restaurant = useSelector(get('restaurant'));
  const reviewFields = useSelector(get('reviewFields'));

  if (!restaurant) {
    return <p>Loading...</p>;
  }

  // RestaurantContainer가 그려질때마다, handleChange, handleSubmit는 새로 생성된다.
  // useCallback을 통해 함수도 캐싱할 수 있다.
  const handleChange = useCallback(
    ({ name, value }) => {
      dispatch(changeReviewField({ name, value }));
    },
    [dispatch],
  );
    // dispatch가 다를 경우에는, 새로 함수를 만들어 준다.
  // dispatch는 다른 변수를 통해 받아온 것이기 때문에 적어준다.

  const handleSubmit = useCallback(() => {
    dispatch(sendReview({ restaurantId }));
  }, [dispatch, restaurantId]);
  // sendReview함수에서 restaurantId가 변경됨에 따라 다르게 로직을 처리함으로
  // [] 변수 인자에 넣어줄 것.
  // 또는 handleSubmit 호출시 파라미터를 받아서 처리할 수 도 있다. (handleChange처럼)
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
