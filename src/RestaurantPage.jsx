import React from 'react';

import { useParams } from 'react-router-dom';

import RestaurantContainer from './RestaurantContainer';
import PageWrapper from './PageWrapper';

export default function RestaurantPage({ params }) {
  const { id } = params || useParams();

  return (
    <PageWrapper>
      <RestaurantContainer restaurantId={id} />
    </PageWrapper>
  );
}
