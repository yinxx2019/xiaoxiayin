var nav = '<ul><li><a href="/" id="active">Home</a></li>';
nav += '<li><a href="experiences/index.html">Experiences</a></li>';
nav += '<li><a href="bylines/index.html">Bylines</a></li>';
nav += '<li><a href="portfolio/index.html">Portfolio</a></li>';
nav += '<li><a href="contact/index.html">Contact</a></li></ul>';
function displayNav() {
  var elNavBar = document.createElement('div');
  elNavBar.setAttribute('id', 'mobilenav');
  elNavBar.innerHTML = nav;
  document.getElementById('nav-icon').appendChild(elNavBar);
};

var el;
el = document.getElementById('nav-icon');
el.addEventListener('click', displayNav, false);
