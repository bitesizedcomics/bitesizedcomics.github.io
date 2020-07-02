var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("hamburgerMenu").style.visibility = "visible";
    document.getElementById("hamburgerMenu").style.opacity = "1";
  } else {
    document.getElementById("hamburgerMenu").style.visibility = "hidden";
    document.getElementById("hamburgerMenu").style.opacity = "0";
  }
  prevScrollpos = currentScrollPos;
}