import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import given from 'given2';

import RegionsContainer from './RegionsContainer';

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    regions: {
      regions: given.regions,

      selectedRegion: { id: 1, name: '서울' },
    },
  }));

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  const renderRegionsContainer = () => render((
    <RegionsContainer />
  ));

  context('with regions', () => {
    given('regions', () => [
      { id: 1, name: '서울' },
      { id: 2, name: '부산' },
    ]);

    it('renders checked regions', () => {
      const { container, getByText } = renderRegionsContainer();

      expect(container).toHaveTextContent('서울(V)');
      expect(container).toHaveTextContent('부산');

      fireEvent.click(getByText('부산'));

      expect(dispatch).toBeCalled();
    });
  });

  context('without regions', () => {
    it('renders "지역 목록을 조회하지 못했습니다." message', () => {
      given('regions', () => []);

      const { container } = renderRegionsContainer();

      expect(container).toHaveTextContent('지역 목록을 조회하지 못했습니다.');
    });
  });
});
