import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Restaurants from './Restaurants';
import RESTAURANTS from '../../../fixtures/restaurants';

describe('Restaurants', () => {
  const handleClick = jest.fn();

  const restaurantsRender = ({ restaurants }) => render((
    <Restaurants
      onClick={handleClick}
      restaurants={restaurants}
    />
  ));

  it('see renders restaurants', () => {
    const { container } = restaurantsRender({
      restaurants: RESTAURANTS,
    });

    RESTAURANTS.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });

  it('renders a link to click event', () => {
    const { getByText } = restaurantsRender({
      restaurants: RESTAURANTS,
    });

    RESTAURANTS.forEach(({ name }) => {
      expect(getByText(name)).not.toBeNull();

      fireEvent.click(getByText(name));

      expect(handleClick).toBeCalled();
    });
  });
});
