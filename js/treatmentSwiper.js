// Treat Section Swiper
(() => {
  const section = document.querySelector("#treat");
  if (!section) return;

  const mainEl = section.querySelector(".treatMainSwiper");
  const thumbEl = section.querySelector(".treatThumbSwiper");

  const prevBtn = section.querySelector(".treatBtn--prev");
  const nextBtn = section.querySelector(".treatBtn--next");

  const currentEl = section.querySelector(".treatCount__current");
  const totalEl = section.querySelector(".treatCount__total");
  const fillEl = section.querySelector(".treatProgress__fill");

  if (!mainEl) return;

  /* =========================
     THUMBS (Desktop Only)
  ========================== */
  let thumbsSwiper = null;

  if (thumbEl && window.innerWidth > 1024) {
    thumbsSwiper = new Swiper(thumbEl, {
      slidesPerView: 2,
      spaceBetween: 12,
      watchSlidesProgress: true,
      slideToClickedSlide: true,
    });
  }

  /* =========================
     MAIN
  ========================== */
  const mainSwiper = new Swiper(mainEl, {
    speed: 650,
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "slide",

    thumbs: thumbsSwiper ? { swiper: thumbsSwiper } : undefined,

    navigation: {
      prevEl: prevBtn,
      nextEl: nextBtn,
    },

    on: {
      init(swiper) {
        updateUI(swiper);
      },
      slideChange(swiper) {
        updateUI(swiper);
      }
    }
  });

  /* =========================
     UI UPDATE
  ========================== */
  function updateUI(swiper) {
    const total = swiper.slides.length;
    const index = swiper.realIndex + 1;

    if (totalEl) totalEl.textContent = total;
    if (currentEl) currentEl.textContent = index;

    if (fillEl) {
      fillEl.style.width = `${(index / total) * 100}%`;
    }
  }

})();
