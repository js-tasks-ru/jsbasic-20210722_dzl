function showSalary(users, age) {
  // ваш код...
  const usersFiltered = users.filter(user => user.age <= age);
  let result = '';
  for (const usersFilteredElement of usersFiltered) {
    result = result + `\n${usersFilteredElement.name}, ${usersFilteredElement.balance}`;
  }
  return result.substr(1);
}
