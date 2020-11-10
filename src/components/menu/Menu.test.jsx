import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Menu from './Menu';

describe('menu', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const handleClick = jest.fn();

  const menuRender = ({ name, check }) => render((
    <Menu
      onClick={handleClick}
      name={name}
      check={check}
    />
  ));

  context('with selected', () => {
    it('checked name status listens click event', () => {
      const { getByText } = menuRender({ name: '한식', check: true });
      const button = getByText('한식(V)');

      expect(button).not.toBeNull();

      expect(handleClick).not.toBeCalled();

      fireEvent.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  context('without selected', () => {
    it('it listens click event', () => {
      const { getByText } = menuRender({ name: '한식', check: false });
      const button = getByText('한식');

      expect(button).not.toBeNull();

      expect(handleClick).not.toBeCalled();

      fireEvent.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
