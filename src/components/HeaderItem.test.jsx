import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import HeaderItem from './HeaderItem';

test('HeaderItem', () => {
  const handleClick = jest.fn();

  const { getByText } = render((
    <HeaderItem
      item="Log In"
      url="/login"
      handleClick={handleClick}
    />
  ));

  fireEvent.click(getByText(/Log In/));

  expect(handleClick).toBeCalled();
});
