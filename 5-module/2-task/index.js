function toggleText() {
  // ваш код...
  document.getElementsByClassName("toggle-text-button")[0].onclick =
    function () {
      let elem = document.getElementById("text");
      elem.hidden == false ? (elem.hidden = true) : (elem.hidden = false);
    };
}
