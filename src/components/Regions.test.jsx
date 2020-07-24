import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

import regions from '../../fixtures/regions';

describe('Regions', () => {
  const handleClick = jest.fn();

  const renderRegions = (selectedRegion) => render((
    <Regions
      regions={regions}
      selectedRegion={selectedRegion}
      handleClick={handleClick}
    />
  ));

  it('renders `regions` title and buttons', () => {
    const { getByText } = renderRegions(regions[0]);

    expect(getByText('Region')).not.toBeNull();

    regions.forEach((region) => {
      if (region.id === regions[0].id) {
        expect(getByText(`${region.name}(V)`)).not.toBeNull();
      }
      if (region.id !== regions[0].id) {
        expect(getByText(`${region.name}`)).not.toBeNull();
      }
    });
  });

  context('when the button is clicked', () => {
    it('runs handleClick', () => {
      const { getByText } = renderRegions(regions[0]);

      fireEvent.click(getByText(regions[1].name));

      expect(handleClick).toBeCalled();
    });
  });

  context('when selected region is not defined', () => {
    it('does not render `(V)` signs', () => {
      const { queryByText } = renderRegions(undefined);

      expect(queryByText('(V)')).toBeNull();
    });
  });
});
