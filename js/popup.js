(() => {
  const popup = document.querySelector("#noticePopup");
  if (!popup) return;

  const KEY = "noticePopup_hideUntil"; // localStorage key

  const open = () => {
    popup.classList.add("is-open");
    popup.setAttribute("aria-hidden", "false");
    document.documentElement.style.overflow = "hidden"; // 배경 스크롤 막기
  };

  const close = () => {
    popup.classList.remove("is-open");
    popup.setAttribute("aria-hidden", "true");
    document.documentElement.style.overflow = "";
  };

  const hideToday = () => {
    // 오늘 자정까지 숨김
    const now = new Date();
    const end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
    localStorage.setItem(KEY, String(end.getTime()));
    close();
  };

  // 오늘 숨김 체크
  const hideUntil = Number(localStorage.getItem(KEY) || 0);
  if (!hideUntil || Date.now() > hideUntil) {
    // ✅ 페이지 들어오면 자동 오픈
    open();
  }

  // 닫기 버튼 / 배경 클릭
  popup.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof Element)) return;

    if (t.matches("[data-popup-close]")) close();
    if (t.matches("[data-popup-hide-today]")) hideToday();
  });

  // ESC 닫기
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && popup.classList.contains("is-open")) close();
  });
})();