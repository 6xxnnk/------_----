// heroSwiper.js
document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector(".heroSwiper");
  if (!root) return;

  // ✅ Swiper 인스턴스 생성
  const heroSwiper = new Swiper(".heroSwiper", {
    slidesPerView: 1,
    loop: true,
    speed: 800,
    effect: "slide",

    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    // (옵션) 기본 버튼도 살아있게 유지
    navigation: {
      nextEl: ".heroNext",
      prevEl: ".heroPrev",
    },

    pagination: {
      el: ".heroPagination",
      clickable: true,
    },

    // 모바일 터치/드래그 품질
    grabCursor: true,
    touchStartPreventDefault: false,
  });

  // ✅ 시안 커스텀 화살표(.heroSlide__arrow) 클릭 시 다음 슬라이드로
  // (loop 환경에서도 안전)
  root.addEventListener("click", (e) => {
    const btn = e.target.closest(".heroSlide__arrow");
    if (!btn) return;

    e.preventDefault();
    heroSwiper.slideNext();
  });

  // ✅ 탭 비활성화/활성화 시 자동재생 상태 안정화(선택)
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) heroSwiper.autoplay?.stop?.();
    else heroSwiper.autoplay?.start?.();
  });
});
