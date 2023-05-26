const topButton = document.querySelector(".to_top_button");

topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const phoneNumber = document.getElementById("from_phone");
const phoneValidationMessage = document.getElementById(
  "phone_validation_message"
);
