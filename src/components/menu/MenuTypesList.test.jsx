import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import MenuTypesList from './MenuTypesList';
import CATEGORIES from '../../../fixtures/categories';

describe('MenuTypesList', () => {
  const handleSelectClick = jest.fn();

  const KOREAN_FOOD = CATEGORIES[0];

  const menuTypesListRender = ({ types, selectedType }) => render((
    <MenuTypesList
      types={types}
      selectedType={selectedType}
      onClickType={handleSelectClick}
    />
  ));

  context('with types', () => {
    it('see renders types', () => {
      const { getByText } = menuTypesListRender({
        types: CATEGORIES,
        selectedType: KOREAN_FOOD,
      });

      CATEGORIES.forEach(({ id, name }) => {
        if (KOREAN_FOOD.id === id) {
          expect(getByText(`${name}(V)`)).not.toBeNull();
          return;
        }
        expect(getByText(name)).not.toBeNull();
      });
    });

    it('renders button to click a menu type', () => {
      const { getByText } = menuTypesListRender({
        types: CATEGORIES,
        selectedType: null,
      });

      CATEGORIES.forEach(({ name }) => {
        fireEvent.click(getByText(name));
        expect(getByText(name)).not.toBeNull();

        expect(handleSelectClick).toBeCalled();
      });
    });
  });

  context('without types', () => {
    const types = [];

    it('nothing render menu list', () => {
      const { container } = menuTypesListRender({ types, selectedType: null });

      expect(container).toBeEmpty();
    });
  });
});
