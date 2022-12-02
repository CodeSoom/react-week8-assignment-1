import { get, equal } from './utils';

test('get', () => {
  const state = {
    nameSlice: {
      name: '홍길동',
    },
  };

  const f = get({ sliceName: 'nameSlice', key: 'name' });
  const g = get({ sliceName: 'nameSlice', key: 'age' });

  expect(f(state)).toBe('홍길동');
  expect(g(state)).toBeUndefined();
});

test('equal', () => {
  const state = {
    name: '홍길동',
  };

  const f = equal('name', '홍길동');
  const g = equal('name', '임꺽정');

  expect(f(state)).toBeTruthy();
  expect(g(state)).toBeFalsy();
});
