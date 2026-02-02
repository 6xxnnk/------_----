// doctorsSwiper.js
document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.querySelector(".doctorsPrev");
  const nextBtn = document.querySelector(".doctorsNext");

  const swiper = new Swiper(".doctorsSwiper", {
    slidesPerView: 1,
    loop: false,
    speed: 650,
    effect: "slide",
    allowTouchMove: true,

    pagination: {
      el: ".doctorsSwiper .swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".doctorsNext",
      prevEl: ".doctorsPrev",
    },

    on: {
      init() {
        toggleNav(this);
      },
      slideChange() {
        toggleNav(this);
      },
      resize() {
        toggleNav(this);
      },
    },
  });

  function toggleNav(sw) {
    // 첫 슬라이드면 Prev 숨김 / 마지막 슬라이드면 Next 숨김
    if (prevBtn) prevBtn.classList.toggle("is-hidden", sw.isBeginning);
    if (nextBtn) nextBtn.classList.toggle("is-hidden", sw.isEnd);
  }
});
