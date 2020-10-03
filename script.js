function displayNav() {
  let elt = document.querySelector('#mobile').style.display;
  if ( elt == "block") {
    document.querySelector('#mobile').style.display = "none";
  } else {
  document.querySelector('#mobile').style.display = "block";
  }
}

function displayDetail(clickedId) {
  let displayId = clickedId + "_detail";
  document.getElementById(displayId).style.display = "block";
}

function closeDetail(clickedElem) {
  clickedElem.parentNode.style.display = "none";
}

var el;
el = document.querySelector('#nav-icon');
el.addEventListener('click', displayNav);

// auto update copyright date

var date = new Date();
var year = date.getFullYear();
document.querySelector('#copyright-date').innerHTML = year;