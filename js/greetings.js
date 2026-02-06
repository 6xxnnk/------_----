// Greeting section reveal (premium underline animation)
(() => {
  const greeting = document.querySelector(".greeting__text");
  if (!greeting) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          greeting.classList.add("is-inview");
          observer.disconnect(); // ✅ 한 번만 실행
        }
      });
    },
    {
      threshold: 0.25,        // 25% 보이면 시작
      rootMargin: "0px 0px -80px 0px" // 살짝 여유
    }
  );

  observer.observe(greeting);
})();
