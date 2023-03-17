const search = document.querySelector(".header__search");
if (window.innerWidth > 1200) {
  search.addEventListener("click", (e) => {
    search.classList.add("search--active");
  });
}
