const menu = () => {
  // console.log("'menu.js' подключен");

  const menu = document.querySelector("menu");

  const menuItems = menu.querySelectorAll("ul>li>a");
  const scrollBtn = document.querySelector("a[href='#service-block']");

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  document.addEventListener("click", (e) => {
    if (menu.classList.contains("active-menu") && !e.target.closest("menu")) {
      handleMenu();
    }

    if (e.target.closest(".menu")) {
      handleMenu();
    }

    if (e.target.classList.contains("close-btn")) {
      handleMenu();
    }

    menuItems.forEach((menuItem) => {
      if (menuItem === e.target) {
        e.preventDefault();
        handleMenu();
        window.scrollBy({
          top: document.querySelector(menuItem.attributes["href"].value)
            .offsetTop,
          behavior: "smooth",
        });
      }
    });

    if (e.target.closest("a[href='#service-block']")) {
      e.preventDefault();
      window.scrollBy({
        top: document.querySelector("#service-block").offsetTop,
        behavior: "smooth",
      });
    }
  });
};

export default menu;
