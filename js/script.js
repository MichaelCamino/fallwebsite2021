document.addEventListener('DOMContentLoaded', function() {

    // TOGGLE NAV 
 
    const menuToggle= document.querySelector(".menu-bars");
    const nav = document.querySelector("nav ul");


    menuToggle.addEventListener("click", () => {
    nav.classList.toggle("slide");
  });

});

// STICKY HEADER

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}