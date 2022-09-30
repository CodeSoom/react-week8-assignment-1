import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

test('Header', () => {
  const { container } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

  expect(container).toHaveTextContent('EatGo');
  expect(container).toHaveTextContent('About');
  expect(container).toHaveTextContent('Restaurants');
  expect(container).toHaveTextContent('Log in');
});
