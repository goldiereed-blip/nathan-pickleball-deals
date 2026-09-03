(() => {
  const buttons = document.querySelectorAll(".deal-card__cta");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      button.dataset.clicked = "true";
    });
  });
})();
