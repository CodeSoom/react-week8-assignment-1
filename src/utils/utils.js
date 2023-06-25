export function get({ sliceName, key }) {
  return (obj) => obj[sliceName][key];
}

export function equal(key, value) {
  return (obj) => obj[key] === value;
}
