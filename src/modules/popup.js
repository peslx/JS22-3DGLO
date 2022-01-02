const popup = () => {
  console.log("'popup.js' подключен");
  const popup = document.querySelector(".popup");
  const triggers = document.querySelectorAll(".popup-btn");
  const closeBtn = popup.querySelector(".popup-close");
  const popupForm = popup.querySelector("form");

  let a;
  let val = 0;

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      openPopup();
    });
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
    hidePopup();
  });

  const hidePopup = () => {
    popupForm.style.opacity = "";
    popupForm.style.transform = "";
    val = 0;
  };

  const showPopup = () => {
    if (document.documentElement.clientWidth <= 768) {
      popupForm.style.opacity = 1;
      popupForm.style.transform = `scale(1)`;
    } else {
      val += 0.05;
      popupForm.style.opacity = val;
      popupForm.style.transform = `scale(${val})`;
      if (val < 1) a = requestAnimationFrame(showPopup);
      if (val == 1) cancelAnimationFrame(a);
    }
  };

  const openPopup = () => {
    popup.style.display = "block";
    hidePopup();
    showPopup();
  };
};

export default popup;
