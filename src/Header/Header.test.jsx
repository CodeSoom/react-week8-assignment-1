import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory, MemoryRouter } from 'react-router-dom';

import Header from './Header';

jest.mock('react-redux');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: jest.fn(),
}));

describe('Header', () => {
  const dispatch = jest.fn();
  const mockPush = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    login: {
      accessToken: '',
    },
  }));

  useHistory.mockImplementation(() => ({ push: mockPush }));

  function renderHeader() {
    return render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
  }

  it('renders links', () => {
    const { getByText } = renderHeader();

    expect(getByText('EatGo')).toContainHTML('<a href="');
    expect(getByText('About')).toContainHTML('<a href="');
    expect(getByText('Restaurants')).toContainHTML('<a href="');
    expect(getByText('Log in')).toContainHTML('<a href="');
  });

  it('listens click event', () => {
    const { getByText } = renderHeader();

    fireEvent.click(getByText('About'));

    expect(mockPush).toBeCalledWith('/about');
  });
});
