import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from '../fixtures/restaurants';

describe('Restaurants', () => {
  const handleClick = jest.fn();

  it('renders regions', () => {
    const { container, getByText } = render((
      <Restaurants
        restaurants={restaurants}
        onClick={handleClick}
      />
    ));

    const restaurantName = restaurants[0].name;

    expect(container).toHaveTextContent(restaurantName);

    fireEvent.click(getByText(restaurantName));

    expect(handleClick).toBeCalled();
  });
});
