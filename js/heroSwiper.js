(() => {
  const root = document.querySelector(".heroSwiper");
  if (!root || typeof Swiper === "undefined") return;

  const hero = new Swiper(root, {
    loop: true,
    speed: 700,
    effect: "fade",
    fadeEffect: { crossFade: true },

    // ✅ 자동 슬라이드
    autoplay: {
      delay: 4500,               // 4.5초마다
      disableOnInteraction: false, // 버튼 눌러도 계속 자동재생
      pauseOnMouseEnter: true,     // PC에서 마우스 올리면 잠깐 멈춤(원치 않으면 false)
    },

    // ✅ loop+fade에서 멈춤/튐 방지용으로 추천
    watchSlidesProgress: true,

    pagination: {
      el: root.querySelector(".heroPagination"),
      clickable: true
    }
  });

  const nextBtn = root.querySelector(".heroSlide__arrow");
  nextBtn?.addEventListener("click", () => hero.slideNext());

  // ✅ 혹시 초기 로드에서 autoplay가 안 붙는 경우 강제 시작
  hero.autoplay?.start?.();
})();
