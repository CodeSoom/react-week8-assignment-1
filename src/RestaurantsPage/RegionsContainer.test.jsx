import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurants: {
        regions: [
          { id: 1, name: '서울' },
          { id: 2, name: '부산' },
        ],
        selectedRegion: { id: 1, name: '서울' },
      },
    }));
  });

  it('renders checked regions', () => {
    const { getByText } = render((
      <RegionsContainer />
    ));

    expect(getByText('서울')).toHaveStyle('border: 2px solid #555');
    expect(getByText('서울')).toHaveStyle('color: #000');
    expect(getByText('부산')).toHaveStyle('border: 2px solid #cbcbcb');
    expect(getByText('부산')).toHaveStyle('color: #555');

    fireEvent.click(getByText('부산'));

    expect(dispatch).toBeCalled();
  });
});
