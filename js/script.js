// Khởi tạo Swiper.js cho phần "INTRODUCTION"
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

// Xử lý sự kiện click cho Hero banner items
const heroBannerItems = document.querySelectorAll('.hero-banner-item');
heroBannerItems.forEach(item => {
  item.addEventListener('click', () => {
    const targetBannerId = item.dataset.target;
    const slideIndex = Array.from(document.querySelectorAll('.swiper-slide')).findIndex(slide => slide.id === targetBannerId);
    swiper.slideTo(slideIndex);
  });
});

// Khởi tạo Swiper.js cho phần "endorsement card"
var endorsementSwiper = new Swiper(".endorsementSwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});