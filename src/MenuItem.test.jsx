import { render } from '@testing-library/react';

import MenuItem from './MenuItem';

describe('MenuItem', () => {
  it('renders name', () => {
    const { container } = render(<MenuItem name="공기밥" />);

    expect(container).toHaveTextContent('공기밥');
  });
});
