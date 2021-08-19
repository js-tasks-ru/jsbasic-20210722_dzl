function makeFriendsList(friends) {
  // ваш код...
  let ul = document.createElement('ul');
  for (const elem of friends) {
    let li = document.createElement('li');
    li.textContent = elem.firstName + ' ' + elem.lastName;
    ul.append(li);
  }
  return ul;
}
