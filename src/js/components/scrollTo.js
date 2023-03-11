// Подключение плавной прокрутки к якорям
import SmoothScroll from "smooth-scroll";
if (window.innerWidth > 1200) {
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true,
    easing: "linear",
  });
} else {
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true,
    easing: "linear",
    header: "[data-scroll-header]",
  });
}
