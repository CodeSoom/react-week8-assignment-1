import React from 'react';

import { useParams } from 'react-router-dom';

import styled from '@emotion/styled';

import RestaurantContainer from './RestaurantContainer';

import Container from './Container';

const Restaurant = styled.div({
  fontFamily: "'Noto Serif KR', serif",
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '40%',
  height: '70%',
  color: '#fff',
  padding: '3em 5em',
  borderRadius: '1em',
  border: '2px solid rgba(255,255,255,0.2)',
  backgroundColor: 'rgba(255,255,255,0.1)',
  backdropFilter: 'saturate(180%) blur(50px)',
});

export default function RestaurantPage({ params }) {
  const { id } = params || useParams();

  return (
    <Container>
      <Restaurant>
        <RestaurantContainer restaurantId={id} />
      </Restaurant>
    </Container>
  );
}
