$(document).ready(function(){
  $(window).scroll(function(){
  if(this.scrollY > 500){
    $('.scroll-up-btn').addClass("show");
}else{
    $('.scroll-up-btn').removeClass("show");
}
});

 // slide-up script
 $('.scroll-up-btn').click(function(){
  $('html').animate({scrollTop: 0});
});

// menu bar
var menu = document.querySelector("#menubars");
var navbar = document.querySelector(".navbar");

menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}
// window.onscroll = () =>{
//     menu.classList.toggle('fa-times')
//     navbar.classList.toggle('active')
// }




document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
} 
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
} 

// slider
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
  });

  // typing animation script

var typed = new Typed(".typing", {
  strings: ["we'll statisfy your love for food.. our dishes will leave you in awe and keep you coming for more."],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});


var typed = new Typed(".typing2", {
  strings: ["we look forward to taking your orders."],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

});







  // document.addEventListener("DOMContentLoaded", function () {
  //   let letter = 0;
  //   const text = "spuring your love for food ...our dishes will leave yoou enarmored.";
  //   function typeText() {
  //     if(letter < text.length){
  //       document.getElementById("type-js").innerHTML += text.charAt(letter);
  //       letter++;
  //       let speed = math.floor(math.random() * 150) + 50;
  //       setTimeout(typeText, speed);
  //     }
  //   }
  //   typeText();
  // });

