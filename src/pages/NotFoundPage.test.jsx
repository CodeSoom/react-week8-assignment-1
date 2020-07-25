import React from 'react';

import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

jest.mock('../assets/images');

test('NotFoundPage', () => {
  render(<NotFoundPage />);
});
