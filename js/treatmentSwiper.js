document.addEventListener("DOMContentLoaded", () => {
  const barEl = document.getElementById("treatBar");
  const fracEl = document.getElementById("treatFraction");

  // 1️⃣ 썸네일 먼저
  const thumbsSwiper = new Swiper(".treatmentThumbsSwiper", {
    slidesPerView: 3,
    spaceBetween: 16,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    allowTouchMove: true,
  });

  // 2️⃣ 메인 Swiper
  const mainSwiper = new Swiper(".treatmentMainSwiper", {
    slidesPerView: 1,
    speed: 600,
    loop: false,

    navigation: {
      nextEl: ".treatNext",
      prevEl: ".treatPrev",
    },

    thumbs: {
      swiper: thumbsSwiper,
    },

    on: {
      init() {
        updateUI(this);
      },
      slideChange() {
        updateUI(this);
      },
    },
  });

  function updateUI(swiper){
    const total = swiper.slides.length;
    const current = swiper.realIndex + 1;

    if (fracEl) {
      fracEl.innerHTML = `<strong>${current}</strong> / ${total}`;
    }
    if (barEl) {
      barEl.style.width = `${(current / total) * 100}%`;
    }
  }
});
