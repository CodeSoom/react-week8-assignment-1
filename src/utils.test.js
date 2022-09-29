import { get, equal } from './utils';

const state = {
  page: {
    name: '홍길동',
  },
};

test('get', () => {
  const f = get({
    page: 'page',
    key: 'name',
  });
  const g = get({
    page: 'page',
    key: 'age',
  });

  expect(f(state)).toBe('홍길동');
  expect(g(state)).toBeUndefined();
});

test('equal', () => {
  const f = equal('name', '홍길동');
  const g = equal('name', '임꺽정');

  expect(f(state.page)).toBeTruthy();
  expect(g(state.page)).toBeFalsy();
});
