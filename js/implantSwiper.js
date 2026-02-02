// implantSwiper.js
document.addEventListener("DOMContentLoaded", () => {
  const totalEl = document.getElementById("implantTotal");
  const currentEl = document.getElementById("implantCurrent");
  const fillEl = document.querySelector(".implantProgress__fill");

  const swiper = new Swiper(".implantSwiper", {
    slidesPerView: 1,
    loop: false, // 카운트/진행바 정확하게
    speed: 650,

    navigation: {
      nextEl: ".implantNext",
      prevEl: ".implantPrev",
    },

    on: {
      init(s) {
        const total = s.slides.length; // loop:false면 실제 슬라이드 수
        totalEl.textContent = total;
        updateProgress(s);
      },
      slideChange(s) {
        updateProgress(s);
      },
    },
  });

  function updateProgress(s) {
    const total = s.slides.length;
    const current = s.activeIndex + 1;

    currentEl.textContent = current;

    const pct = (current / total) * 100;
    if (fillEl) fillEl.style.width = `${pct}%`;

    // 양끝에서 버튼 비활성(원하면 숨김 처리도 가능)
    const prev = document.querySelector(".implantPrev");
    const next = document.querySelector(".implantNext");
    if (prev) prev.disabled = s.isBeginning;
    if (next) next.disabled = s.isEnd;

    if (prev) prev.style.opacity = s.isBeginning ? 0.35 : 1;
    if (next) next.style.opacity = s.isEnd ? 0.35 : 1;
  }
});
