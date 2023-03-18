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

//!about company swiper
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

//!mobile-swiper-grid
let initGrid = false;
function swiperCardGrid() {
  if (window.innerWidth <= 600) {
    if (!initGrid) {
      initGrid = true;
      Swiper.use([Navigation, Keyboard]);
      let swiper = new Swiper(".about-grid__images", {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 1000,
        loop: true,
        centeredSlides: false,
        navigation: {
          nextEl: ".grid-next",
          prevEl: ".grid-prev",
        },

        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
      });
    }
  } else if (initGrid) {
    swiper.destroy();
    initGrid = false;
  }
}
swiperCardGrid();
window.addEventListener("resize", swiperCardGrid);

//!mobile-swiper-history
let initHistory = false;
function swiperCardHistory() {
  if (window.innerWidth <= 600) {
    if (!initHistory) {
      initHistory = true;
      Swiper.use([Navigation, Keyboard]);
      let swiper = new Swiper(".about-history__items", {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 1000,
        loop: true,
        centeredSlides: false,
        navigation: {
          nextEl: ".history-next",
          prevEl: ".history-prev",
        },

        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
      });
    }
  } else if (initHistory) {
    swiper.destroy();
    initHistory = false;
  }
}
swiperCardHistory();
window.addEventListener("resize", swiperCardHistory);

//!mobile-swiper-single
let initSingle = false;
function swiperCardSingle() {
  if (window.innerWidth <= 600) {
    if (!initSingle) {
      initSingle = true;
      Swiper.use([Navigation, Keyboard]);
      let swiper = new Swiper(".single-swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 1000,
        loop: true,
        centeredSlides: false,
        navigation: {
          nextEl: ".single-next",
          prevEl: ".single-prev",
        },

        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
      });
    }
  } else if (initSingle) {
    swiper.destroy();
    initSingle = false;
  }
}
swiperCardSingle();
window.addEventListener("resize", swiperCardSingle);
