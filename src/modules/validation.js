const validation = () => {
  console.log("'validation.js' подключен");

  const calcInputs = document
    .querySelector(".calc-block")
    .querySelectorAll("input");

  const mainFormInputs = document
    .querySelector(".main-form-input")
    .querySelectorAll("input");

  const footerFormInputs = document
    .querySelector(".footer-form-input")
    .querySelectorAll("input");

  const popupFormInputs = document
    .getElementById("form3")
    .querySelectorAll("input");

  console.log(mainFormInputs);
  console.log(footerFormInputs);
  console.log(popupFormInputs);

  calcInputs.forEach((i) => {
    i.addEventListener("input", () => {
      i.value = i.value.replace(/\D/g, "");
    });
  });
};

export default validation;
