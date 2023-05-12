const phoneNumber = document.getElementById("from_phone");
const phoneValidationMessage = document.getElementById(
  "phone_validation_message"
);

phoneNumber.addEventListener("keyup", () => {
  phoneNumber.value = phoneNumber.value
    .replace(/[^0-9]/g, "")
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
    .replace(/(\-{1,2})$/g, "");
});

phoneNumber.addEventListener("change", () => {
  console.log(phoneNumber.value.length);
  if (phoneNumber.value.length < 13) {
    phoneValidationMessage.textContent =
      "휴대폰 번호를 모두 입력하지 않았습니다.";
  }
});

const emailInput = document.getElementById("from_email");
const emailValidationMessage = document.getElementById(
  "email_validation_message"
);
const emailValidation =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

emailInput.addEventListener("change", () => {
  console.log(emailInput.value.match(emailValidation));
  if (emailInput.value.match(emailValidation) === null) {
    emailValidationMessage.textContent =
      "이메일을 맞게 입력했는지 확인해주세요.";
  }
});

document.getElementById("contact_form").addEventListener("submit", (event) => {
  event.preventDefault();

  if (window.confirm("입력하신 내용으로 보내시겠습니까?")) {
    emailjs
      .sendForm("service_sms_portfolio", "template_sms_portfolio", this)
      .then(
        () => {
          alert("감사합니다! 빠른 시간 안에 답장드리도록 하겠습니다.");
          document.getElementById("from_name").value = "";
          document.getElementById("from_phone").value = "";
          document.getElementById("from_email").value = "";
          document.getElementById("from_message").value = "";
        },
        function (error) {
          console.log("이메일을 보내지 못했습니다.", error);
        }
      );
  }
});

const p1Slides = document.querySelectorAll(".project_01_slide");
const p1NextBtn = document.querySelector(".btn_01_next");
const p1PrevBtn = document.querySelector(".btn_01_prev");
const p1SliderPageNum = document.querySelector(".page_number_01");
let p1currentIdx = 0;
const p1MaxIdx = p1Slides.length - 1;

p1Slides.forEach((slide, idx) => {
  slide.style.transform = `translateX(${idx * 100}%)`;
  p1SliderPageNum.textContent = `${p1currentIdx + 1} / ${p1MaxIdx + 1}`;
});

p1NextBtn.addEventListener("click", () => {
  if (p1currentIdx === p1MaxIdx) {
    p1currentIdx = 0;
  } else {
    p1currentIdx++;
  }

  p1Slides.forEach((slide, idx) => {
    slide.style.transform = `translateX(${100 * (idx - p1currentIdx)}%)`;
    p1SliderPageNum.textContent = `${p1currentIdx + 1} / ${p1MaxIdx + 1}`;
  });
});

p1PrevBtn.addEventListener("click", () => {
  if (p1currentIdx === 0) {
    p1currentIdx = p1MaxIdx;
  } else {
    p1currentIdx--;
  }

  p1Slides.forEach((slide, idx) => {
    slide.style.transform = `translateX(${100 * (idx - p1currentIdx)}%)`;
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
});

p2NextBtn.addEventListener("click", () => {
  if (p2currentIdx === p2MaxIdx) {
    p2currentIdx = 0;
  } else {
    p2currentIdx++;
  }

  p2Slides.forEach((slide, idx) => {
    slide.style.transform = `translateX(${100 * (idx - p2currentIdx)}%)`;
    p2SliderPageNum.textContent = `${p2currentIdx + 1} / ${p2MaxIdx + 1}`;
  });
});

p2PrevBtn.addEventListener("click", () => {
  if (p2currentIdx === 0) {
    p2currentIdx = p2MaxIdx;
  } else {
    p2currentIdx--;
  }

  p2Slides.forEach((slide, idx) => {
    slide.style.transform = `translateX(${100 * (idx - p2currentIdx)}%)`;
  });
});
