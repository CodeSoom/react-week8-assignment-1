import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import NavBar from './NavBar';

import ROUTES from '../../constants/routes';

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
