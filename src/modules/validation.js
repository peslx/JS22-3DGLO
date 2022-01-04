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

  const validate = {
    words: {
      cyr: (str) => str.replace(/[^а-яА-Я\- ]/g, ""),
      lat: (str) => str.replace(/[^a-zA-Z\- ]/g, ""),
    },
    digits: (str) => str.replace(/\D/g, ""),
    mail: (str) => str.replace(/[^a-zA-Z0-9\-@_.~!'*]/g, ""),
    phone: (str) => str.replace(/[^\d\(\)\-]/g, ""),
    input: (i) => {
      if (i.type == "text" || i.placeholder == "Ваше сообщение") {
        i.value = validate.words.cyr(i.value);
      } else if (i.type == "email") {
        i.value = validate.mail(i.value);
      } else if (i.type == "tel") {
        i.value = validate.phone(i.value);
      }
    },
    onBlur: (i) => {
      i.value = i.value.trim();
      i.value = i.value.replace(/\s+\b/g, " ");
      i.value = i.value.replace(/\b\s+/g, " ");
      i.value = i.value.replace(/\s+/g, " ");
      i.value = i.value.replace(/\-+/g, "-");
      i.value = i.value.replace(/(^-)|(-$)/g, "");
      i.value = i.value.replace(/(^ +)|( +$)/g, "");
      if (
        i.type === "text" &&
        i.value !== "" &&
        i.placeholder !== "Ваше сообщение"
      ) {
        i.value = i.value
          .split(/\s/)
          .map((word) => word[0].toUpperCase() + word.substring(1))
          .join(" ");
      }
    },
  };

  mainFormInputs.forEach((i) => {
    i.addEventListener("input", () => {
      validate.input(i);
    });
    i.addEventListener("blur", (e) => {
      validate.onBlur(i);
      console.log("**" + e.target.value + "**");
    });
  });

  footerFormInputs.forEach((i) => {
    i.addEventListener("input", () => {
      validate.input(i);
    });
    i.addEventListener("blur", () => {
      validate.onBlur(i);
    });
  });

  popupFormInputs.forEach((i) => {
    i.addEventListener("input", () => {
      validate.input(i);
    });
    i.addEventListener("blur", () => {
      validate.onBlur(i);
    });
  });

  calcInputs.forEach((i) => {
    i.addEventListener("input", () => {
      i.value = validate.digits(i.value);
    });
    i.addEventListener("blur", () => {
      validate.onBlur(i);
    });
  });
};

export default validation;
