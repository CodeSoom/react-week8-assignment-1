import { waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import useSlide from './useSlide';

jest.useFakeTimers();

describe('useSlide', () => {
  it('', async () => {
    const elementLength = 3;
    const { result } = renderHook(() => useSlide(elementLength));

    await waitFor(() => {
      expect(result.current).toBe(0);
    });

    await waitFor(() => {
      expect(result.current).toBe(1);
    });

    await waitFor(() => {
      expect(result.current).toBe(2);
    });

    await waitFor(() => {
      expect(result.current).toBe(0);
    });
  });
});
