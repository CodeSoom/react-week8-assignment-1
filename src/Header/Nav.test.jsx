import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import Nav from './Nav';

jest.mock('react-redux');

describe('Header', () => {
  const dispatch = jest.fn();
  const handleClick = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    login: {
      accessToken: given.accessToken,
    },
  }));

  it('renders links', () => {
    const { getByText } = render(<Nav onClick={handleClick} />);

    expect(getByText('About')).toContainHTML('<a href="');
    expect(getByText('Restaurants')).toContainHTML('<a href="');
  });

  context('when logged out', () => {
    given('accessToken', () => '');

    it('renders \'Log in\'', () => {
      const { getByText } = render(<Nav onClick={handleClick} />);

      fireEvent.click(getByText('Log in'));

      expect(handleClick).toBeCalled();
    });
  });

  context('when logged in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders “Log out” button', () => {
      const { getByText } = render(<Nav onClick={handleClick} />);

      fireEvent.click(getByText('Log out'));

      expect(dispatch).toBeCalled();
    });
  });
});
