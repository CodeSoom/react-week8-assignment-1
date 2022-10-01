import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

jest.mock('react-redux');

describe('Header', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    login: {
      accessToken: given.accessToken,
    },
  }));

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
  });

  context('when logged out', () => {
    given('accessToken', () => '');

    it('renders \'Log in\'', () => {
      const { getByText } = renderHeader();

      expect(getByText('Log in')).toContainHTML('<a href="');
    });
  });

  context('when logged in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders “Log out” button', () => {
      const { getByText } = renderHeader();

      fireEvent.click(getByText('Log out'));

      expect(dispatch).toBeCalled();
    });
  });
});
