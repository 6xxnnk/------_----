// About reveal animation (repeat on scroll)
(() => {
  const targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    },
    {
      threshold: 0.15,          // 15% 보이면 트리거
      rootMargin: "0px 0px -10% 0px" // 살짝 여유 줘서 자연스럽게
    }
  );

  targets.forEach((el) => io.observe(el));
})();
