"use strict";


// HIDE TOP NAVBAR WHE SCROLLING DOWN
  var navbarCollapse = function() {
    if ($("#navbar").offset().top > 300) {
      $("#navbar").addClass("disp");
    } else {
      $("#navbar").removeClass("disp");
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);

// TOP NAVBAR BURGER DROPDOWN
document.querySelector(".navbar").addEventListener("click", function(){
    document.querySelector(".navbar__list").classList.toggle("show-navbar")
    document.querySelector(".navbar__burger").classList.toggle("show-navbar")
    document.querySelector(".hero__title").classList.toggle("invisible")
    document.querySelector(".navbar").classList.toggle("navbar-bg")
});

//-----------------
// const target = document.querySelector('.test');
// console.log(target.style.marginTop)

window.addEventListener('scroll', function(e) {

  let target = document.querySelectorAll(".test");
  let pos = window.pageYOffset * 0.3;

for(let i=0; i<target.length; i++){
      target[i].style.marginTop =+ pos+"px";

    }
          // target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';

});






