document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animate-on-scroll");

  function checkScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll();
});
