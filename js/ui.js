(() => {
  const btn = document.querySelector(".mNavBtn");
  const nav = document.querySelector("#mNav");
  if (!btn || !nav) return;

  const closeEls = nav.querySelectorAll("[data-mnav-close]");
  const panel = nav.querySelector(".mNav__panel");
  const links = nav.querySelectorAll('a[href^="#"]');

  let lastFocus = null;

  const open = () => {
    lastFocus = document.activeElement;

    nav.classList.add("is-open");
    nav.setAttribute("aria-hidden", "false");

    btn.classList.add("is-open");
    btn.setAttribute("aria-expanded", "true");

    document.documentElement.classList.add("is-mnav-open");
    document.body.classList.add("is-mnav-open");
  };

  const close = () => {
    nav.classList.remove("is-open");
    nav.setAttribute("aria-hidden", "true");

    btn.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");

    document.documentElement.classList.remove("is-mnav-open");
    document.body.classList.remove("is-mnav-open");

    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  };

  btn.addEventListener("click", () => {
    nav.classList.contains("is-open") ? close() : open();
  });

  closeEls.forEach((el) => el.addEventListener("click", close));

  // ✅ 링크 클릭하면 닫고, sticky header 만큼 스크롤 보정
  links.forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;

      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      close();

      // header 높이 계산(변수 있으면 그걸 우선)
      const headerH =
        parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h"), 10) ||
        document.querySelector(".header")?.offsetHeight ||
        0;

      const y = target.getBoundingClientRect().top + window.pageYOffset - headerH;
      window.scrollTo({ top: y, behavior: "smooth" });
      history.pushState(null, "", id);
    });
  });

  // ESC로 닫기
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) close();
  });
})();
