function displayNav() {
  var elt = document.getElementById('mobile').style.display;
  if ( elt == "block") {
  document.getElementById('mobile').style.display = "none";
} else {
  document.getElementById('mobile').style.display = "block";
}
}

var el;
el = document.getElementById('nav-icon');
el.addEventListener('click', displayNav);
