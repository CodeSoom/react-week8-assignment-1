import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

import regions from '../../fixtures/regions';

describe('Regions', () => {
  const handleClick = jest.fn();

  function renderRegions(selectedRegion) {
    return render((
      <Regions
        regions={regions}
        selectedRegion={selectedRegion}
        onClick={handleClick}
      />
    ));
  }

  it('renders regions', () => {
    const { getAllByRole } = renderRegions();

    regions.forEach((region, index) => {
      expect(getAllByRole('button')[index].textContent).toBe(region.name);
    });

    expect(getAllByRole('listitem')).toHaveLength(regions.length);
  });

  it('renders button to listent to click event', () => {
    const { getAllByRole } = renderRegions();

    const categoriesButtons = getAllByRole('button');

    expect(handleClick).not.toBeCalled();

    regions.forEach((region, index) => {
      fireEvent.click(categoriesButtons[index]);

      expect(handleClick).toBeCalledWith(region.id);
    });
  });

  context('with selected region', () => {
    regions.forEach((region, index) => {
      it("renders 'V' button with equal category id", () => {
        const { getAllByRole } = renderRegions(region);

        expect(getAllByRole('button')[index].textContent).toContain('V');
      });
    });
  });

  context('without selected region', () => {
    it('doesn\'t render \'V\' button', () => {
      const { getAllByRole } = renderRegions();

      const regionsButtons = getAllByRole('button');

      regionsButtons.forEach((button) => {
        expect(button).not.toContain('V');
      });
    });
  });
});
