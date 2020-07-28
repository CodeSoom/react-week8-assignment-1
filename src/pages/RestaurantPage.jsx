import React from 'react';

import { useParams } from 'react-router-dom';

import RestaurantContainer from '../components/restaurant/RestaurantContainer';
import PageWrapper from '../components/PageWrapper';

export default function RestaurantPage({ params }) {
  const { id } = params || useParams();

  return (
    <PageWrapper>
      <RestaurantContainer restaurantId={id} />
    </PageWrapper>
  );
}
