document.addEventListener('DOMContentLoaded', function() {

    // TOGGLE NAV 
 
    const menuToggle= document.querySelector(".menu-bars");
    const nav = document.querySelector("nav ul");


    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("slide");
    });

    const navlinks = document.querySelectorAll("nav a");
    const checkbox=document.querySelector(".menu-bars input");

    console.log(navlinks);
    navlinks.forEach(item => {
      
      item.addEventListener('click', event => {
        nav.classList.remove("slide");
        console.log(checkbox.checked);
        checkbox.checked = false;
      })
    });

// SCROLL ANIMATION //
const myobserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.setAttribute('data-sectionstate', 'active');
      } else {
          entry.target.setAttribute('data-sectionstate', 'inactive');
      }
  });
});
document.querySelectorAll('section').forEach( (section) => {
  myobserver.observe(section);
});


});




// STICKY HEADER

// window.onscroll = function() {myFunction()};

// var header = document.getElementById("myHeader");

// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }