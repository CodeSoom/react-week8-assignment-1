import React from 'react';

import { useParams } from 'react-router-dom';

import Container from '../styles/Container';

import RestaurantContainer from '../containers/RestaurantContainer';

export default function RestaurantPage({ params }) {
  const { id } = params || useParams();

  return (
    <Container>
      <RestaurantContainer restaurantId={id} />
    </Container>
  );
}
