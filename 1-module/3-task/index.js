function ucFirst(str) {
  // ваш код...
  let result;
  if (str === '') {
    result = '';
  } else if (str.length == 1) {
    result = str.toUpperCase();
  } else {
    result = str[0].toUpperCase() + str.slice(1);
  }
  return result;
}
