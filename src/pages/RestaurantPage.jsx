import React from 'react';

import { useParams } from 'react-router-dom';

import RestaurantContainer from '../containers/RestaurantContainer';

import Title from '../styles/Title';


export default function RestaurantPage({ params }) {
  const { id } = params || useParams();

  return (
    <>
      <Title>Restautrant</Title>
      <RestaurantContainer restaurantId={id} />
    </>
  );
}
