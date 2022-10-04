export function get({
  page,
  key,
}) {
  return (obj) => obj[page][key];
}

export function equal(key, value) {
  return (obj) => obj[key] === value;
}
