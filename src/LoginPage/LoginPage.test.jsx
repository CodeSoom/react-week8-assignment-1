import { useHistory, MemoryRouter } from 'react-router-dom';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginPage from './LoginPage';

jest.mock('react-redux');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: jest.fn(),
}));

describe('LoginPage', () => {
  const dispatch = jest.fn();
  const mockPush = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      login: {
        loginFields: {
          email: 'test@test',
          password: '1234',
        },
      },
    }));

    useHistory.mockImplementation(() => ({ push: mockPush }));
  });

  function renderLoginPage() {
    return render((
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    ));
  }

  it('renders Log-in title', () => {
    const { container } = renderLoginPage();

    expect(container).toHaveTextContent('Log In');
  });

  it('renders input control', () => {
    const { getByLabelText } = renderLoginPage();

    expect(getByLabelText('E-mail')).not.toBeNull();
  });

  it('listens click event', () => {
    const { getByRole } = renderLoginPage();

    const loginButton = getByRole('button');

    fireEvent.click(loginButton);

    expect(dispatch).toBeCalled();
    expect(mockPush).toBeCalledWith('/');
  });
});
