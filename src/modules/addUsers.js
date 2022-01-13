// import { renderer } from "renderer";

export const addUsers = () => {
  const form = document.querySelector("form");
  const formName = document.querySelector("#form-name");
  const formEmail = document.querySelector("#form-email");
  const formChildren = document.querySelector("#form-children");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);

    const user = {
      name: formName.value,
      email: formEmail.value,
      children: formChildren.checked,
      permissions: false,
    };
    console.log(user);

    userService.addUser(user);
  });
};
