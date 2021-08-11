function getMinMax(str) {
  // ваш код...
  const arr = str.split(' ').filter(Number).sort((a, b) => a - b);
  const result = {
    'min': Number(arr[0]),
    'max': Number(arr[arr.length - 1]),
  };
  return result;
}

