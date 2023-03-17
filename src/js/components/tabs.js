const tabsParent = document.querySelector(".tabs__nav");
const tab = document.querySelectorAll(".tabs__nav-btn");
const tabContent = document.querySelectorAll(".tabs__panel");
tabHash = window.location.hash.replace("#", "");

if (tabsParent) {
  function hideTabContent() {
    tabContent.forEach((tab) => {
      tab.style.opacity = "0";
    });

    tab.forEach((tab) => {
      tab.classList.remove("tabs__nav-btn--active");
    });
  }

  function showTabContent(i = 0) {
    tabContent[i].style.opacity = "1";
    tab[i].classList.add("tabs__nav-btn--active");
  }

  hideTabContent();
  if (tab[tabHash]) {
    showTabContent(tabHash);
  } else {
    showTabContent();
  }

  tabsParent.addEventListener("click", (event) => {
    let target = event.target;

    if (target.classList.contains("tabs__nav-btn")) {
      tab.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}
