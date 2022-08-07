// eslint-disable-next-line import/prefer-default-export
export function equal(key, value) {
  return (obj) => obj[key] === value;
}
