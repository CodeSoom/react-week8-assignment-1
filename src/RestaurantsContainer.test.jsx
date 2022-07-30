import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';

import given from 'given2';

import RESTAURANTS from '../fixtures/restaurants';

import RestaurantsContainer from './RestaurantsContainer';

describe('<RestaurantsContainer />', () => {
  const handleClick = jest.fn();

  const renderRestaurantsContainer = () => render((
    <RestaurantsContainer onClickRestaurant={handleClick} />
  ));

  useSelector.mockImplementation((selector) => selector({
    restaurants: given.restaurants,
  }));

  beforeEach(() => {
    handleClick.mockClear();
  });

  context('with restaurants', () => {
    given('restaurants', () => RESTAURANTS);

    it('renders restaurants', () => {
      const { getByText } = renderRestaurantsContainer();

      RESTAURANTS.forEach(({ name, id }) => {
        const link = getByText(name);

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', `/restaurants/${id}`);
      });
    });

    describe('click restaurant', () => {
      it('calls handleClick', () => {
        const { getByText } = renderRestaurantsContainer();

        const restaurant = RESTAURANTS[0];

        fireEvent.click(getByText(restaurant.name));

        expect(handleClick).toBeCalledWith(restaurant);
      });
    });
  });

  context('without restaurants', () => {
    given('restaurants', () => []);

    it('renders "레스토랑 목록을 조회하지 못했습니다." message', () => {
      const { container } = renderRestaurantsContainer();

      expect(container).toHaveTextContent('레스토랑 목록을 조회하지 못했습니다.');
    });
  });
});
