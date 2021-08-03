function sumSalary(salaries) {
  // ваш код...
  let sumSalaries = 0;
  for (const salary in salaries) {
    if (typeof salaries[salary] !== 'number' || salaries[salary] === Infinity || salaries[salary] === -Infinity || isNaN(salaries[salary])) {
      continue;
    } else {
      sumSalaries += salaries[salary];
    }
  }
  return sumSalaries;
}
