function camelize(str) {
  // ваш код...
  let strArr = str.split('');
  let result = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === '-') {
      result.push((strArr[i + 1]).toUpperCase());
      i++;
    } else {
      result.push(strArr[i]);
    }
  }
  return result.join('');
}

