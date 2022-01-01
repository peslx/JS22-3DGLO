const menu = () => {
  console.log("'menu.js' подключен");

  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");
  const links = document.querySelectorAll('a[href^="#"]');

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };
  menuBtn.addEventListener("click", handleMenu);
  closeBtn.addEventListener("click", handleMenu);
  menuItems.forEach((menuItem) =>
    menuItem.addEventListener("click", handleMenu)
  );

  links.forEach((link) => {
    if (link.attributes["href"].value.length > 1) {
      // console.log(link);
      link.addEventListener("click", (e) => {
        e.preventDefault();
        // console.log(
        //   document.querySelector(link.attributes["href"].value).offsetTop
        // );
        window.scrollBy({
          top: document.querySelector(link.attributes["href"].value).offsetTop,
          behavior: "smooth",
        });
      });
    }
  });
};

export default menu;
