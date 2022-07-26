import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

describe('<Header />', () => {
  const renderHeader = () => render((
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ));

  it('renders title link', () => {
    const { getByText } = renderHeader();

    const title = getByText('마이 레스토랑');

    expect(title).toBeInTheDocument();
    expect(title).toHaveAttribute('href', '/');
  });
});
