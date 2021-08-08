import { memo } from 'react';
import { useParams } from 'react-router-dom';

import RestaurantContainer from './RestaurantContainer';

function RestaurantPage({ params }) {
  const { id } = params || useParams();

  return <RestaurantContainer restaurantId={id} />;
}

export default memo(RestaurantPage);
