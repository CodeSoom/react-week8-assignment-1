import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: {
        regions: {
          data: [
            { id: 1, name: '서울' },
            { id: 2, name: '부산' },
          ],
          status: given.status,
          error: '지역 목록을 불러오지 못했습니다.',
        },
        selectedRegion: { id: 1, name: '서울' },
      },
    }));
  });

  context('when succeded', () => {
    given('status', () => 'succeeded');

    it('renders checked regions', () => {
      const { container, getByText } = render((
        <RegionsContainer />
      ));

      expect(container).toHaveTextContent('서울(V)');
      expect(container).toHaveTextContent('부산');

      fireEvent.click(getByText('부산'));

      expect(dispatch).toBeCalled();
    });
  });

  context('when loading', () => {
    given('status', () => 'loading');

    it('renders loading', () => {
      const { container } = render((
        <RegionsContainer />
      ));

      expect(container).toHaveTextContent('지역 목록 불러오는 중');
    });
  });

  context('when failed', () => {
    given('status', () => 'failed');

    it('renders error message', () => {
      const { container } = render((
        <RegionsContainer />
      ));

      expect(container).toHaveTextContent('지역 목록을 불러오지 못했습니다.');
    });
  });
});
