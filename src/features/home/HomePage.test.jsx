import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { ROUTES } from './components/home/NavBar';

import HomePage from './HomePage';

describe('<HomePage />', () => {
  const renderHomePage = () => render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));

  it('renders title', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('Home');
  });

  it('renders navigations', () => {
    const { getByText } = renderHomePage();

    ROUTES.forEach(({ name }) => {
      const navigation = getByText(name);

      expect(navigation).toBeInTheDocument();
    });
  });
});
