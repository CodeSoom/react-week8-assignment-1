import { renderHook } from '@testing-library/react-hooks';
import useSlide from './useSlide';

describe('useSlide', () => {
  it('setBoolean의 값이 false가 된다', () => {
    const elementLength = 5;
    const prev = 1;

    const { result } = renderHook(() => useSlide(elementLength));

    expect(result.current.boolean).toBeFalsy();
  });
});
