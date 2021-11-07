const swiper = new Swiper('.swiper', {
  // Optional parameters
  
  loop: true,
  autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  

  
});
var menuButton = document.querySelector('.menu-hamburger');
  menuButton.addEventListener('click', function() {
    document.querySelector('.menu__box').classList.toggle('navbar-active');
  });