function checkSpam(str) {
  // ваш код...
  // Напишите функцию checkSpam(str), возвращающую true, если str содержит '1xBet' или 'XXX', а иначе false.
  // Функция должна быть нечувствительна к регистру
  return str.toLowerCase().includes('1xbet') || str.toLowerCase().includes('xxx');
}
