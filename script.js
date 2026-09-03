// Nathan's Pickleball Deals — decorative interactions only.
// The referral links are plain <a href> tags and work with this
// script disabled, blocked, or slow to load.

(function () {
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Brief glow ring on a referral button tap — tactile, not flashy.
  var ctas = document.querySelectorAll("[data-press]");
  ctas.forEach(function (cta) {
    cta.addEventListener("click", function () {
      if (prefersReducedMotion) return;
      cta.classList.add("pressed");
      window.setTimeout(function () {
        cta.classList.remove("pressed");
      }, 260);
    });
  });
})();
