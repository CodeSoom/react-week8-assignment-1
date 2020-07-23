import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import RoutePage from './RoutePage';

test('HomePage', () => {
  render((
    <MemoryRouter>
      <RoutePage />
    </MemoryRouter>
  ));
});
