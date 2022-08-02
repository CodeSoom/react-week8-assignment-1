import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

describe('<HomePage />', () => {
  const renderHomePage = () => render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));

  it('renders title', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('Eat Go에 오신 것을 환영합니다.🙌');
  });

  it('renders description', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('레스토랑을 구경해보세요.😎');
  });
});
