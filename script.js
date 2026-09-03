// Nathan's Pickleball Deals — decorative interactions only.
// The referral links are plain <a href> tags and work with this
// script disabled, blocked, or slow to load.

(function () {
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Tiny sparkle burst on a referral button tap.
  var ctas = document.querySelectorAll("[data-sparkle]");
  ctas.forEach(function (cta) {
    cta.addEventListener("click", function () {
      if (prefersReducedMotion) return;
      cta.classList.add("pop");
      window.setTimeout(function () {
        cta.classList.remove("pop");
      }, 550);
    });
  });

  // One small celebratory moment on page load: the hero fades/settles in.
  if (!prefersReducedMotion) {
    var hero = document.querySelector(".hero");
    if (hero) {
      hero.style.opacity = "0";
      hero.style.transform = "translateY(8px)";
      hero.style.transition = "opacity 500ms ease, transform 500ms ease";
      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
          hero.style.opacity = "1";
          hero.style.transform = "translateY(0)";
        });
      });
    }
  }
})();
