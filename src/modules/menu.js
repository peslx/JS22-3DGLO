const menu = () => {
  console.log("'menu.js' подключен");

  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");
  const scrollBtn = document.querySelector("a[href='#service-block']");

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };
  menuBtn.addEventListener("click", handleMenu);
  closeBtn.addEventListener("click", handleMenu);
  menuItems.forEach((menuItem) =>
    menuItem.addEventListener("click", handleMenu)
  );

  menuItems.forEach((link) => {
    if (link.attributes["href"].value.length > 1) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollBy({
          top: document.querySelector(link.attributes["href"].value).offsetTop,
          behavior: "smooth",
        });
      });
    }
  });
  scrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollBy({
      top: document.querySelector("#service-block").offsetTop,
      behavior: "smooth",
    });
  });
};

export default menu;
