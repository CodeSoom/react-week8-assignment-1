import { get, equal, sortById } from './utils';

test('get', () => {
  const state = {
    name: '홍길동',
  };

  const f = get('name');
  const g = get('age');

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

test('sort', () => {
  const lists = [
    {
      id: 1,
      name: '탁1',
    },
    {
      id: 3,
      name: '탁2',
    },
    {
      id: 6,
      name: '탁3',
    },
    {
      id: 18,
      name: '탁4',
    },
  ];

  lists.sort(sortById);
  expect(lists[0].name).toEqual('탁4');
  expect(lists[1].name).toEqual('탁3');
  expect(lists[2].name).toEqual('탁2');
  expect(lists[3].name).toEqual('탁1');
});
