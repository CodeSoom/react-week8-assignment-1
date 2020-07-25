import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from '../../fixtures/restaurants';

describe('Restaurants', () => {
  const handleClick = jest.fn();

  const renderRestaurants = () => render((
    <Restaurants
      restaurants={restaurants}
      handleClick={handleClick}
    />
  ));

  it('renders restaurants name', () => {
    const { getByText } = renderRestaurants();

    restaurants.forEach((restaurant) => {
      expect(getByText(restaurant.name)).not.toBeNull();
    });
  });

  context('when the restaurant is clicked', () => {
    it('runs restaurants name', () => {
      const { getByText } = renderRestaurants();

      restaurants.forEach((restaurant) => {
        fireEvent.click(getByText(restaurant.name));
        expect(handleClick).toBeCalled();
      });
    });
  });
});
