import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

import regions from '../fixtures/regions';

describe('Regions', () => {
  const handleClick = jest.fn();

  it('renders regions', () => {
    const { container, getByText } = render((
      <Regions
        regions={regions}
        selectedRegion={regions[0]}
        onClick={handleClick}
      />
    ));

    expect(container).toHaveTextContent('서울(V)');
    expect(container).toHaveTextContent('부산');

    fireEvent.click(getByText('부산'));

    expect(handleClick).toBeCalled();
  });
});
