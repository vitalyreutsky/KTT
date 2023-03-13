const navItemActive = document.querySelectorAll(".nav__item--active");

navItemActive.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    const subMenu = item.querySelector(".sub-menu");
    if (item.classList.contains("active")) {
      subMenu.style.maxHeight = subMenu.scrollHeight + "px";
    } else {
      subMenu.style.maxHeight = 0;
    }
  });
});
