function isEmpty(obj) {
  // ваш код...
  for (const objKey in obj) {
    return false;
  }
  return true;
}
