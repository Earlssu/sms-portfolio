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
