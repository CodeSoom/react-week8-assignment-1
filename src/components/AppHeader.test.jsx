import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import AppHeader from './AppHeader';

describe('<AppHeader />', () => {
  const renderHeader = () => render((
    <MemoryRouter>
      <AppHeader />
    </MemoryRouter>
  ));

  it('renders title link', () => {
    const { getByText } = renderHeader();

    const title = getByText('Eat Go');

    expect(title).toBeInTheDocument();
    expect(title).toHaveAttribute('href', '/');
  });
});
