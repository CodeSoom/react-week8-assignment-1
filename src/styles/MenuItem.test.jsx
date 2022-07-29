import { render } from '@testing-library/react';

import MenuItem from './MenuItem';

describe('MenuItem', () => {
  it('active is true', () => {
    const { getByText } = render((
      <MenuItem active>
        <p>안녕</p>
      </MenuItem>
    ));

    expect(getByText('안녕').parentElement).toHaveStyle('background: rgb 238, 238, 238');
  });
});
