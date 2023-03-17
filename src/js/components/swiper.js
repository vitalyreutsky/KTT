import Swiper, { Autoplay, Keyboard, Navigation, Pagination } from "swiper";

//!mobile-swiper-business
let initBusiness = false;
function swiperCardBusiness() {
  if (window.innerWidth <= 600) {
    if (!initBusiness) {
      initBusiness = true;
      Swiper.use([Navigation, Keyboard]);
      let swiper = new Swiper(".business-swiper", {
        slidesPerView: 1.03,
        spaceBetween: 10,
        speed: 1000,
        loop: true,
        navigation: {
          nextEl: ".business-swiper__next",
          prevEl: ".business-swiper__prev",
        },

        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
      });
    }
  } else if (initBusiness) {
    swiper.destroy();
    initBusiness = false;
  }
}
swiperCardBusiness();
window.addEventListener("resize", swiperCardBusiness);

//!mobile-swiper-leaders
let initLeaders = false;
function swiperCardLeaders() {
  if (window.innerWidth <= 600) {
    if (!initLeaders) {
      initLeaders = true;
      Swiper.use([Navigation, Keyboard]);
      let swiper = new Swiper(".leaders-swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 1000,
        loop: true,
        centeredSlides: false,
        navigation: {
          nextEl: ".leaders-swiper__next",
          prevEl: ".leaders-swiper__prev",
        },

        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
      });
    }
  } else if (initLeaders) {
    swiper.destroy();
    initLeaders = false;
  }
}
swiperCardLeaders();
window.addEventListener("resize", swiperCardLeaders);

//!anout company swiper
Swiper.use([Keyboard, Pagination, Autoplay]);
const swiper = new Swiper(".about-company__swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 1000,
  loop: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  autoplay: {
    delay: 2000,
  },

  pagination: {
    el: ".about-company__pagination",
    clickable: true,
    dynamicBullets: false,
  },
});
