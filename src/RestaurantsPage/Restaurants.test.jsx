import { render, fireEvent } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from '../../fixtures/restaurants';

describe('Restaurants', () => {
  const handleClick = jest.fn();

  it('renders restaurants', () => {
    const { getAllByRole } = render((
      <Restaurants
        restaurants={restaurants}
        onClick={handleClick}
      />
    ));

    const restaurantLinks = getAllByRole('link');

    restaurantLinks.forEach((restaurantLink, index) => {
      expect(restaurantLink).toHaveTextContent(restaurants[index].name);
      expect(restaurantLink.href).toContain(`${restaurants[index].id}`);

      fireEvent.click(restaurantLink);

      expect(handleClick).toBeCalledWith(restaurants[index]);
    });

    expect(getAllByRole('listitem')).toHaveLength(restaurants.length);
  });
});
