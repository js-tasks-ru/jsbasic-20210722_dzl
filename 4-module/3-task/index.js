function highlight(table) {
  // ваш код...
  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i];
    if (row.cells[1].innerHTML < 18) {
      row.setAttribute('style', 'text-decoration: line-through');
    }
    if (row.cells[2].innerHTML === 'm') {
      row.classList.add('male');
    } else {
      row.classList.add('female');
    }
    if (row.cells[3].getAttribute('data-available') === 'true') {
      row.classList.add('available');
    } else if (row.cells[3].getAttribute('data-available') === 'false') {
      row.classList.add('unavailable');
    } else {
      row.setAttribute('hidden', 'true');
    }
  }
}
