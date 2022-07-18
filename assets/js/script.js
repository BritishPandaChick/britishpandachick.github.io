//Disney Codes Challenge button opens article
function openDisneyCodes(){
  window.open("https://dev.to/theoriginalbpc/everything-you-need-to-know-about-disney-codes-challenge-3ojb", "_blank");
}

function openYouTube() {
  window.open("https://britishpandachick.github.io/bpc-youtube");
}

// Sticky Header 
//When user scrolls the page, execuse myFunction
window.onscroll = function() {myFunction()};

//Get the header 
var header = document.getElementById("myHeader");

//Get the offset position of the navbar 
var sticky = header.offsetTop;

//Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position 
function myFunction() {
  if (windowpageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}