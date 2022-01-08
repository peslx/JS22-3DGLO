import { help, animate } from "./helpers";

const popup = () => {
  console.log("'popup.js' подключен");
  const popup = document.querySelector(".popup");
  const triggers = document.querySelectorAll(".popup-btn");
  const popupForm = popup.querySelector("form");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      openPopup();
    });
  });

  popup.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      popup.style.display = "none";
      hidePopup();
    }
  });

  popupForm.addEventListener("submit", () => {
    popup.style.display = "none";
    hidePopup();
  });

  const hidePopup = () => {
    popupForm.style.opacity = "";
    popupForm.style.transform = "";
  };

  const showPopup = () => {
    if (document.documentElement.clientWidth <= 768) {
      popupForm.style.opacity = 1;
      popupForm.style.transform = `scale(1)`;
    } else {
      animate({
        duration: 600,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          popupForm.style.opacity = progress;
          popupForm.style.transform = `scale(${progress})`;
        },
      });
    }
  };

  const openPopup = () => {
    popup.style.display = "block";
    hidePopup();
    showPopup();
  };

  help("'popup.js'");
};

export default popup;
