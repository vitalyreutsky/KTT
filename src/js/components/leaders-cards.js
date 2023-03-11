const leadersCards = document.querySelectorAll(".leader-card");

for (let card of leadersCards) {
  card.addEventListener("mouseover", () => {
    clearActiveClasses();

    card.classList.add("leader-card--active");
  });
}

function clearActiveClasses() {
  leadersCards.forEach((card) => {
    card.classList.remove("leader-card--active");
  });
}
