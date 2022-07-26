import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import NavBar, { ROUTES } from './NavBar';

describe('<NavBar />', () => {
  const renderNavBar = () => render((
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  ));

  it('renders navigations', () => {
    const { getByText } = renderNavBar();

    ROUTES.forEach(({ name, path }) => {
      const navigation = getByText(name);

      expect(navigation).toBeInTheDocument();
      expect(navigation).toHaveAttribute('href', path);
    });
  });
});
