import { render, fireEvent } from '@testing-library/react';

import given from 'given2';

import RegionItem from './RegionItem';

describe('RegionItem', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    given('isSelected', () => false);
  });

  const region = { id: 1, name: '서울' };

  const onClick = jest.fn();

  const renderRegionItem = () => render((
    <RegionItem
      region={region}
      isSelected={given.isSelected}
      onClick={onClick}
    />
  ));

  context('without selected region', () => {
    it('renders region name', () => {
      const { container } = renderRegionItem();

      expect(container).toHaveTextContent('서울');
    });
  });

  context('with selected region', () => {
    beforeEach(() => {
      given('isSelected', () => true);
    });

    it('renders selected region name', () => {
      const { container } = renderRegionItem();

      expect(container).toHaveTextContent('서울(V)');
    });
  });

  it('listens for click event on select region', () => {
    const { getByText } = renderRegionItem();

    fireEvent.click(getByText('서울'));

    expect(onClick).toBeCalledWith(1);
  });
});
