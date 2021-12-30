const popup = () => {
  console.log("'popup.js' подключен");
  const popup = document.querySelector(".popup");
  const triggers = document.querySelectorAll(".popup-btn");
  const closeBtn = popup.querySelector(".popup-close");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      popup.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
};

export default popup;
