import {
  MemoryRouter,
} from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { setAccessToken } from '../features/login/loginSlice';

import { loadItem } from '../services/storage';

import App from './App';

jest.mock('react-redux');
jest.mock('../services/storage');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: {
        regions: [
          { id: 1, name: '서울' },
        ],
      },
      categories: {
        categories: [],
      },
      restaurants: [],
    }));
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  it('renders header', () => {
    const { getByText } = renderApp({ path: '/' });

    const title = getByText('마이 레스토랑');

    expect(title).toBeInTheDocument();
  });

  context('with path /', () => {
    it('renders the home page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /about', () => {
    it('renders the about page', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('20명에게 추천');
    });
  });

  context('with path /restaurants', () => {
    it('renders the restaurants page', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('서울');
    });
  });

  context('with invalid path', () => {
    it('renders the not found page', () => {
      const { container } = renderApp({ path: '/xxx' });

      expect(container).toHaveTextContent('Not Found');
    });
  });

  context('when logged out', () => {
    beforeEach(() => {
      loadItem.mockImplementation(() => null);
    });

    it("doesn't call dispatch", () => {
      renderApp({ path: '/' });

      expect(dispatch).not.toBeCalled();
    });
  });

  context('when logged in', () => {
    const accessToken = 'ACCESS_TOKEN';

    beforeEach(() => {
      loadItem.mockImplementation(() => accessToken);
    });

    it('calls dispatch with “setAccessToken” action', () => {
      renderApp({ path: '/' });

      expect(dispatch).toBeCalledWith(setAccessToken(accessToken));
    });
  });
});
