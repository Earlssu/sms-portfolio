document
  .getElementById("contact_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (window.confirm("이메일을 보내시겠습니까?")) {
      emailjs
        .sendForm("service_sms_portfolio", "template_sms_portfolio", this)
        .then(
          function () {
            alert("입력하신 내용을 보냈습니다.");
            document.getElementById("from_name").value = "";
            document.getElementById("from_phone").value = "";
            document.getElementById("from_email").value = "";
            document.getElementById("from_message").value = "";
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    }
  });

const slides = document.querySelectorAll(".project_slide");
const nextBtn = document.querySelector(".btn_next");
const prevBtn = document.querySelector(".btn_prev");
const sliderPageNum = document.querySelector(".slider_page_number");
let currentIdx = 0;
const maxIdx = slides.length - 1;

slides.forEach((slide, idx) => {
  slide.style.transform = `translateX(${idx * 100}%)`;
  sliderPageNum.textContent = `${currentIdx + 1} / ${maxIdx + 1}`;
});

nextBtn.addEventListener("click", function () {
  if (currentIdx === maxIdx) {
    currentIdx = 0;
  } else {
    currentIdx++;
  }

  slides.forEach((slide, idx) => {
    slide.style.transform = `translateX(${100 * (idx - currentIdx)}%)`;
    sliderPageNum.textContent = `${currentIdx + 1} / ${maxIdx + 1}`;
  });
});

prevBtn.addEventListener("click", function () {
  if (currentIdx === 0) {
    currentIdx = maxIdx;
  } else {
    currentIdx--;
  }

  slides.forEach((slide, idx) => {
    slide.style.transform = `translateX(${100 * (idx - currentIdx)}%)`;
  });
});
