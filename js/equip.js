// Equip tabs switching
(() => {
  const section = document.querySelector("#equip");
  if (!section) return;

  const tabs = section.querySelectorAll(".equipTab");
  const stage = section.querySelector(".equipStage");
  const img = section.querySelector(".equipImg");
  const name = section.querySelector(".equipName");
  const desc = section.querySelector(".equipDesc");

  const data = {
    novacare: {
      img: "./img/equipment01.png",
      alt: "노바케어 장비 이미지",
      name: "노바케어 <span>(수관살균시스템)</span>",
      desc: "진료에 사용되는 수관을 정기적으로 살균·관리하여 위생과 안전 기준을 높입니다"
    },
    melag: {
      img: "./img/equipment02.png",
      alt: "Melag 멸균 장비 이미지",
      name: "Vacuklav 43B+ (B class) <span>(멸균기)</span>",
      desc: "의료기기 멸균 과정을 체계화하여 감염 관리 수준을 강화합니다"
    },
    "3shape": {
      img: "./img/equipment03.png",
      alt: "3Shape 구강스캐너 이미지",
      name: "Trios 6 <span>(3D구강스캐너)</span>",
      desc: "정밀 스캔으로 오차를 줄이고 명확한 진단과 계획 수립에 도움을 줍니다"
    },
    osstem: {
      img: "./img/equipment04.png",
      alt: "오스템 장비 이미지",
      name: "T2 plus <span>(CBCT)</span>",
      desc: "검증된 시스템을 기반으로 안정적인 식립과 사후 관리를 지원합니다"
    }
  };

  function setActive(key){
    const item = data[key];
    if (!item) return;

    stage.classList.add("is-switching");

    // 짧게 페이드아웃 후 교체
    window.setTimeout(() => {
      img.src = item.img;
      img.alt = item.alt;
      name.innerHTML = item.name;
      desc.textContent = item.desc;

      stage.classList.remove("is-switching");
    }, 170);
  }

  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.equip;

      tabs.forEach(t => {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });

      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");

      setActive(key);
    });
  });
})();
