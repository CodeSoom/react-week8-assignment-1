import React from 'react';

import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

jest.mock('../assets/images');

test('AboutPage', () => {
  render(<AboutPage />);
});
