function namify(users) {
  // ваш код...
  const namesArray = [];
  for (const user of users) {
    namesArray.push(user['name']);
  }
  return namesArray;
}

