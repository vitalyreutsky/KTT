function setObserver(el, activeElOn, activeElOff) {
  if (el) {
    const options = {
      // родитель целевого элемента - область просмотра
      root: null,
      // отступ снизу
      rootMargin: "0px",
      // процент пересечения - половина изображения
      threshold: 0.1,
    };
    // создаем наблюдатель
    const observerAbout = new IntersectionObserver((entries, observer) => {
      // для каждой записи-целевого элемента
      entries.forEach((entry) => {
        // если элемент является наблюдаемым
        if (entry.isIntersecting) {
          // добавить ему CSS-класс
          activeElOn.classList.add("animation-img-on--active");
          activeElOff.classList.add("animation-img-off--active");

          setTimeout(() => {
            activeElOn.classList.remove("animation-img-on--active");
            activeElOff.classList.remove("animation-img-off--active");
          }, 3000);
        }
      });
    }, options);
    // выбираем обьект слежения по классу
    observerAbout.observe(el);
  }
}

//About
const sectionAbout = document.querySelector(".about-images");
const aboutImgOn = document.querySelector(".about-img--on");
const aboutImgOff = document.querySelector(".about-img--off");

//Business
const sectionBusiness = document.querySelector(".business-images");
const businessImgOn = document.querySelector(".business-img--on");
const businessImgOff = document.querySelector(".business-img--off");

//Leaders
const sectionLeaders = document.querySelector(".leaders-images");
const leadersImgOn = document.querySelector(".leaders-img--on");
const leadersImgOff = document.querySelector(".leaders-img--off");

//Geography
const sectionGeography = document.querySelector(".geography-images");
const geographyImgOn = document.querySelector(".geography-img--on");
const geographyImgOff = document.querySelector(".geography-img--off");

//Work
const sectionWork = document.querySelector(".work-images");
const workImgOn = document.querySelector(".work-img--on");
const workImgOff = document.querySelector(".work-img--off");

setObserver(sectionAbout, aboutImgOn, aboutImgOff);
setObserver(sectionBusiness, businessImgOn, businessImgOff);
setObserver(sectionLeaders, leadersImgOn, leadersImgOff);
setObserver(sectionGeography, geographyImgOn, geographyImgOff);
setObserver(sectionWork, workImgOn, workImgOff);
