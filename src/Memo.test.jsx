import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';
import RestaurantDetailTest from './RestaurantDetailTest';

jest.mock('react-redux');

describe('check React.memo performance', () => {
  const restaurant = {
    name: '식당',
    address: '강남역',
    menuItems: [
      { id: 1, name: '떡볶이' },
    ],
  };

  context('RestaurantDetail', () => {
    it('rendering with React.memo', () => {
      console.time('with1');
      render(<RestaurantDetail restaurant={restaurant} />);
      console.timeEnd('with1');

      console.time('with2');
      render(<RestaurantDetail restaurant={restaurant} />);
      console.timeEnd('with2');
    });

    it('rendering without React.memo', () => {
      console.time('without1');
      render(<RestaurantDetailTest restaurant={restaurant} />);
      console.timeEnd('without1');

      console.time('without2');
      render(<RestaurantDetailTest restaurant={restaurant} />);
      console.timeEnd('without2');
    });
  });
});
