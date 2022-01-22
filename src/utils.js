export function get(key) {
  return (obj) => obj[key];
}

export function equal(key, value) {
  return (obj) => obj[key] === value;
}

export function checkDiffByKey(arr1, arr2, key) {
  const isEqual = arr1.every((item, index) => {
    const isSame = item[key] === arr2[index][key];
    return isSame;
  });

  return isEqual;
}
