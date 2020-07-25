import React from 'react';

import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

import restaurant from '../../fixtures/restaurant';

describe('Restaurant', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  const reviewFields = { score: '', description: '' };

  it('renders Restaurants', () => {
    render((
      <Restaurant
        restaurant={restaurant}
        accessToken="TOKEN"
        reviewFields={reviewFields}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    ));
  });
});
