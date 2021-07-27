function factorial(n) {
  // ваш код...
  let fact = 1;
  if (n === 0 || n === 1) {
    fact = 1;
  } else {
    for (let i = n; i > 0; i--) {
      fact *= i;
    }
  }
  return fact;
}
