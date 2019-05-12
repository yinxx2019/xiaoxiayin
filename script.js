function displayNav() {
  var elt = document.getElementById('mobile').style.display;
  if ( elt == "none") {
  document.getElementById('mobile').style.display = "block";
} else {
  document.getElementById('mobile').style.display = "none"
}
}

var el;
el = document.getElementById('nav-icon');
el.addEventListener('click', displayNav, false);
