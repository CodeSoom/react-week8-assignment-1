import React from 'react';

import { render } from '@testing-library/react';

import Header from './Header';

test('Header', () => {
  const handleClickLink = jest.fn();

  const { getByText } = render((
    <Header
      handleClickLink={handleClickLink}
    />
  ));

  expect(getByText(/Codesoom Eatgo/)).not.toBeNull();

  expect(getByText(/About/)).not.toBeNull();
  expect(getByText(/NotFound/)).not.toBeNull();
  expect(getByText(/Restaurants/)).not.toBeNull();
  expect(getByText(/Log In/)).not.toBeNull();
});
