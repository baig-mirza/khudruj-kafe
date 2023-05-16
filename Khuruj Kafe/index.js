window.addEventListener("scroll", reveal); /* claims section the whole container */

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('activel');
    }
  }
};

window.addEventListener("scroll", show); /* for the about mariam section text side */

function show() {
  var reveals = document.querySelectorAll(".sho");

  for(var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('activel');
    }
  }
};