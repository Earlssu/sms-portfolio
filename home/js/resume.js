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
  if (phoneNumber.value.length !== 13) {
    phoneValidationMessage.textContent =
      "휴대폰 번호를 모두 입력하지 않았습니다.";
  }
});

const contactForm = document.getElementById("contact_form");
const emailInput = document.getElementById("from_email");
const emailValidationMessage = document.getElementById(
  "email_validation_message"
);
const emailValidation =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

emailInput.addEventListener("change", () => {
  if (emailInput.value.match(emailValidation) === null) {
    emailValidationMessage.textContent =
      "이메일을 맞게 입력했는지 확인해주세요.";
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(document.getElementById("contact_form"), this);

  if (window.confirm("입력하신 내용으로 보내시겠습니까?")) {
    emailjs
      .sendForm("service_sms_portfolio", "template_sms_portfolio", contactForm)
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
