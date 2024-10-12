var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

const heroBannerItems = document.querySelectorAll('.hero-banner-item');
heroBannerItems.forEach(item => {
  item.addEventListener('click', () => {
    const targetBannerId = item.dataset.target;
    const slideIndex = Array.from(document.querySelectorAll('.swiper-slide')).findIndex(slide => slide.id === targetBannerId);
    swiper.slideTo(slideIndex);
  });
});

var endorsementSwiper = new Swiper(".endorsementSwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});