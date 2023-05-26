const p1Slides = document.querySelectorAll(".project_01_slide");
const p1NextBtn = document.querySelector(".btn_01_next");
const p1PrevBtn = document.querySelector(".btn_01_prev");
const p1SliderPageNum = document.querySelector(".page_number_01");
let p1currentIdx = 0;
const p1MaxIdx = p1Slides.length - 1;

p1Slides.forEach((slide, idx) => {
  slide.style.transform = `translateX(${idx * 100}%)`;
  p1SliderPageNum.textContent = `${p1currentIdx + 1} / ${p1MaxIdx + 1}`;
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
    p1SliderPageNum.textContent = `${p1currentIdx + 1} / ${p1MaxIdx + 1}`;
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
    p1SliderPageNum.textContent = `${p1currentIdx + 1} / ${p1MaxIdx + 1}`;

    document
      .querySelector(`.p1_desc${p1currentIdx + 1}`)
      .classList.add("active");
  });
});

const p2Slides = document.querySelectorAll(".project_02_slide");
const p2NextBtn = document.querySelector(".btn_02_next");
const p2PrevBtn = document.querySelector(".btn_02_prev");
const p2SliderPageNum = document.querySelector(".page_number_02");
let p2currentIdx = 0;
const p2MaxIdx = p2Slides.length - 1;

p2Slides.forEach((slide, idx) => {
  slide.style.transform = `translateX(${idx * 100}%)`;
  p2SliderPageNum.textContent = `${p2currentIdx + 1} / ${p2MaxIdx + 1}`;
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
    p2SliderPageNum.textContent = `${p2currentIdx + 1} / ${p2MaxIdx + 1}`;
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
    p2SliderPageNum.textContent = `${p2currentIdx + 1} / ${p2MaxIdx + 1}`;

    document
      .querySelector(`.p2_desc${p2currentIdx + 1}`)
      .classList.add("active");
  });
});
