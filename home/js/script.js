const topButton = document.querySelector(".to_top_button");

topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
