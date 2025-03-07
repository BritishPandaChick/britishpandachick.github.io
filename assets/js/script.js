// add class navbarDark on navbar scroll 
const header = document.querySelector('.navbar');

window.onscroll = function() {
  var top = window.scrollY;
  if(top >= 100) {
    header.classList.add('navbarDark');
  } else {
    header.classList.remove('navbarDark');
  }
}

//Disney Codes Challenge button opens article
function openDisneyCodes(){
  window.open("https://dev.to/theoriginalbpc/everything-you-need-to-know-about-disney-codes-challenge-3ojb", "_blank");
}
