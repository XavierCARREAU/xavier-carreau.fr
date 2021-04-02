//nav bar fixed
window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("navbar");
var fixNavigation = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > fixNavigation) {
    header.classList.add("fixNavigation");
  } else {
    header.classList.remove("fixNavigation");
  }
}
