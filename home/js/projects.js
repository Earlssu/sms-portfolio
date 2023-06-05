const p0Slides = document.querySelectorAll(".project_00_slide");
const p0NextBtn = document.querySelector(".btn_00_next");
const p0PrevBtn = document.querySelector(".btn_00_prev");
const p0SliderPageNames = ["기본 랜딩 페이지", "이력서", "프로젝트"];
const p0SliderPageName = document.querySelector(".page_title_00");
let p0currentIdx = 0;
const p0MaxIdx = p0Slides.length - 1;

p0Slides.forEach((slide, idx) => {
  slide.style.transform = `translateX(${idx * 100}%)`;
  p0SliderPageName.textContent = `${p0SliderPageNames[p0currentIdx]}`;
  document.querySelector(`.p0_desc${p0currentIdx + 1}`).classList.add("active");
});

p0NextBtn.addEventListener("click", () => {
  document
    .querySelector(`.p0_desc${p0currentIdx + 1}`)
    .classList.remove("active");

  if (p0currentIdx === p0MaxIdx) {
    p0currentIdx = 0;
  } else {
    p0currentIdx++;
  }

  p0Slides.forEach((slide, idx) => {
    slide.style.transform = `translateX(${100 * (idx - p0currentIdx)}%)`;
    p0SliderPageName.textContent = `${p0SliderPageNames[p0currentIdx]}`;
    document
      .querySelector(`.p0_desc${p0currentIdx + 1}`)
      .classList.add("active");
  });
});

p0PrevBtn.addEventListener("click", () => {
  document
    .querySelector(`.p0_desc${p0currentIdx + 1}`)
    .classList.remove("active");

  if (p0currentIdx === 0) {
    p0currentIdx = p0MaxIdx;
  } else {
    p0currentIdx--;
  }

  p0Slides.forEach((slide, idx) => {
    slide.style.transform = `translateX(${100 * (idx - p0currentIdx)}%)`;
    p0SliderPageName.textContent = `${p0SliderPageNames[p0currentIdx]}`;

    document
      .querySelector(`.p0_desc${p0currentIdx + 1}`)
      .classList.add("active");
  });
});

const p1Slides = document.querySelectorAll(".project_01_slide");
const p1NextBtn = document.querySelector(".btn_01_next");
const p1PrevBtn = document.querySelector(".btn_01_prev");
const p1SliderPageNames = [
  "기본 랜딩 페이지",
  "내 정보",
  "내 정보 수정",
  "이벤트 상세",
  "비밀번호 변경",
];
const p1SliderPageName = document.querySelector(".page_title_01");
let p1currentIdx = 0;
const p1MaxIdx = p1Slides.length - 1;

p1Slides.forEach((slide, idx) => {
  slide.style.transform = `translateX(${idx * 100}%)`;
  p1SliderPageName.textContent = `${p1SliderPageNames[p1currentIdx]}`;
  document.querySelector(`.p1_desc${p1currentIdx + 1}`).classList.add("active");
});

p1NextBtn.addEventListener("click", () => {
  document
    .querySelector(`.p1_desc${p1currentIdx + 1}`)
    .classList.remove("active");

  if (p1currentIdx === p1MaxIdx) {
    p1currentIdx = 0;
  } else {
    p1currentIdx++;
  }

  p1Slides.forEach((slide, idx) => {
    slide.style.transform = `translateX(${100 * (idx - p1currentIdx)}%)`;
    p1SliderPageName.textContent = `${p1SliderPageNames[p1currentIdx]}`;
    document
      .querySelector(`.p1_desc${p1currentIdx + 1}`)
      .classList.add("active");
  });
});

p1PrevBtn.addEventListener("click", () => {
  document
    .querySelector(`.p1_desc${p1currentIdx + 1}`)
    .classList.remove("active");

  if (p1currentIdx === 0) {
    p1currentIdx = p1MaxIdx;
  } else {
    p1currentIdx--;
  }

  p1Slides.forEach((slide, idx) => {
    slide.style.transform = `translateX(${100 * (idx - p1currentIdx)}%)`;
    p1SliderPageName.textContent = `${p1SliderPageNames[p1currentIdx]}`;

    document
      .querySelector(`.p1_desc${p1currentIdx + 1}`)
      .classList.add("active");
  });
});

const p2Slides = document.querySelectorAll(".project_02_slide");
const p2NextBtn = document.querySelector(".btn_02_next");
const p2PrevBtn = document.querySelector(".btn_02_prev");
const p2SliderPageNames = [
  "기본 랜딩 페이지",
  "챔피언 상세 정보",
  "소환사 전적 검색",
];
const p2SliderPageName = document.querySelector(".page_title_02");
let p2currentIdx = 0;
const p2MaxIdx = p2Slides.length - 1;

p2Slides.forEach((slide, idx) => {
  slide.style.transform = `translateX(${idx * 100}%)`;
  p2SliderPageName.textContent = `${p2SliderPageNames[p2currentIdx]}`;
  document.querySelector(`.p2_desc${p2currentIdx + 1}`).classList.add("active");
});

p2NextBtn.addEventListener("click", () => {
  document
    .querySelector(`.p2_desc${p2currentIdx + 1}`)
    .classList.remove("active");

  if (p2currentIdx === p2MaxIdx) {
    p2currentIdx = 0;
  } else {
    p2currentIdx++;
  }

  p2Slides.forEach((slide, idx) => {
    slide.style.transform = `translateX(${100 * (idx - p2currentIdx)}%)`;
    p2SliderPageName.textContent = `${p2SliderPageNames[p2currentIdx]}`;

    document
      .querySelector(`.p2_desc${p2currentIdx + 1}`)
      .classList.add("active");
  });
});

p2PrevBtn.addEventListener("click", () => {
  document
    .querySelector(`.p2_desc${p2currentIdx + 1}`)
    .classList.remove("active");

  if (p2currentIdx === 0) {
    p2currentIdx = p2MaxIdx;
  } else {
    p2currentIdx--;
  }

  p2Slides.forEach((slide, idx) => {
    slide.style.transform = `translateX(${100 * (idx - p2currentIdx)}%)`;
    p2SliderPageName.textContent = `${p2SliderPageNames[p2currentIdx]}`;

    document
      .querySelector(`.p2_desc${p2currentIdx + 1}`)
      .classList.add("active");
  });
});
