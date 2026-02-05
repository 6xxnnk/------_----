// locationRoughmap.js (static embed only)
document.addEventListener("DOMContentLoaded", () => {
  const topBtn = document.querySelector(".locationQuick__top");
  topBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});