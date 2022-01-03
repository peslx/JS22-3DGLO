const tabs = () => {
  console.log("'tabs.js' подключен");
  const tabMenu = document.querySelector(".service-header");
  const tabBtns = document.querySelectorAll(".service-header-tab");
  const tabs = document.querySelectorAll(".service-tab");

  tabMenu.addEventListener("click", (e) => {
    if (e.target.closest(".service-header-tab")) {
      tabBtns.forEach((btn, index) => {
        if (btn === e.target.closest(".service-header-tab")) {
          btn.classList.add("active");
          tabs[index].classList.remove("d-none");
        } else {
          btn.classList.remove("active");
          tabs[index].classList.add("d-none");
        }
      });
    }
  });
};

export default tabs;
