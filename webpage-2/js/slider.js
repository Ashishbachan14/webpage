document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
          delay: 5000, // Autoplay delay in milliseconds (5 seconds in this example)
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
  });
});
