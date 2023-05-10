document.addEventListener('DOMContentLoaded', function () {

     // OPEN AND CLOSE SITE NAV MENU
     const mysitenav = document.querySelector('.site-nav');
     const mymenubutton = document.querySelector('.menu-button');
     mymenubutton.onclick = function () {
          if (mysitenav.getAttribute('data-navstate') === 'closed') {
               mysitenav.setAttribute('data-navstate', 'open');
          } else {
               mysitenav.setAttribute('data-navstate', 'closed');
          };
     };

     // SCROLL TRIGGERED ANIMATION
     let options = {
          threshold: .25
     }
     const myobserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
               if (entry.isIntersecting) {
                    entry.target.setAttribute("data-sectionstate", "active");
               } else {
                    entry.target.setAttribute("data-sectionstate", "inactive");
               }
          });
     }, options);

     document.querySelectorAll(".scroll-triggered").forEach((el) => {
          myobserver.observe(el);
     });

});

// IMAGE SLIDER
const navLeft = document.querySelector(".left");
const navRight = document.querySelector(".right");

const images = document.querySelector(".images");
const colors = document.querySelector(".colored-backgrounds");

let index = 0;

function right() {
     transform((index = index < 2 ? ++index : 0));
}

function left() {
     transform((index = index > 0 ? --index : 3));
}

navLeft.addEventListener("click", left);
navRight.addEventListener("click", right);

function transform(index) {
     images.style.transform = `translateX(-${index * 100}%)`;
     colors.style.transform = `translateX(-${index * 100}%)`;
}

// OVERLAY NAV MENU SHOW HIDE
const mymenubutton = document.querySelector('.menu-button');
const mysitenav = document.querySelector('.site-header .site-nav');

mymenubutton.onclick = function () {
     // statements go here
     if (mysitenav.getAttribute('data-navstate') === 'open') {
          mysitenav.setAttribute('data-navstate', 'closed')
     } else {
          mysitenav.setAttribute('data-navstate', 'open')
     }
};

//  REVEAL ON SCROLL JS
// CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVER
const myobserver = new IntersectionObserver(entries => {
     entries.forEach(entry => {
          if (entry.isIntersecting) {
               entry.target.setAttribute('data-sectionstate', 'active');
          } else {
               entry.target.setAttribute('data-sectionstate', 'inactive');
          }
     });
});

document.querySelectorAll('.scroll-triggered').forEach((section) => {
     myobserver.observe(section);
});

// Created using tweenMax
function fadeOut() {

     TweenMax.to("button", 1, {
          y: -100,
          opacity: 0
     });

     TweenMax.to(".screen", 2, {
          y: -400,
          opacity: 0,
          ease: Power2.easeInOut,
          delay: 2
     });

     TweenMax.from(".overlay", 2, {
          ease: Power2.easeInOut
     });

     TweenMax.to(".overlay", 2, {
          delay: 2.6,
          top: "-110%",
          ease: Expo.easeInOut
     });

     TweenMax.to(".overlay-2", 2, {
          delay: 3,
          top: "-110%",
          ease: Expo.easeInOut
     });

     TweenMax.from(".content", 2, {
          delay: 3.2,
          opacity: 0,
          ease: Power2.easeInOut
     });

     TweenMax.to(".content", 2, {
          opacity: 1,
          y: -300,
          delay: 3.2,
          ease: Power2.easeInOut
     });

}

document.querySelector('#contact-form').addEventListener('submit', (e) => {
     e.preventDefault();
     e.target.elements.name.value = '';
     e.target.elements.email.value = '';
     e.target.elements.message.value = '';
});


var swiper = new Swiper('.swiper-container', {
     pagination: '.swiper-pagination',
     paginationClickable: true,
     parallax: true,
     speed: 600,

});

// reveal point from bottom and top of the window
var revealerpoint = 150;
window.addEventListener('scroll', reveal);
reveal();

function reveal() {
     console.log("scrolling");
     var revealers = document.querySelectorAll('.revealer');
     for (var i = 0; i < revealers.length; i++) {
          var windowheight = window.innerHeight;
          var revealertop = revealers[i].getBoundingClientRect().top;
          var revealerbottom = revealers[i].getBoundingClientRect().bottom;
          //console.log("revealertop: " + revealertop);
          //console.log("revealerbottom: " + revealerbottom);
          if (revealertop < windowheight - revealerpoint) {
               revealers[i].classList.add('active')
          } else {
               revealers[i].classList.remove('active');
          };
          if (revealerbottom < 0 + revealerpoint) {
               revealers[i].classList.remove('active');
          }
     }
};

