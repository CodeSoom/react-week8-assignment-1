import { BrowserRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import Header from './Header';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

test('Header', async () => {
  const { user } = renderWithRouter(<Header>헤더</Header>, { route: '/about' });

  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();

  await user.click(screen.getByRole('link', { name: '헤더' }));
  expect(window.location.pathname).toBe('/');
});
