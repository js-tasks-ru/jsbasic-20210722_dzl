function hideSelf() {
  // ваш код...
  let elem = document.getElementsByClassName("hide-self-button");
  elem[0].onclick = function () {
    this.hidden = true;
  };
}
