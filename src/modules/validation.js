const validation = () => {
  // console.log("'validation.js' подключен");

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

  const setValid = (input) => {
    input.classList.remove("validError");
    input.classList.add("validOk");
    input.style.borderBottom = "2px solid green";
    input.style.color = "green";
    input.style.backgroundColor = "#88ff88";
    setTimeout(() => {
      input.style.borderBottom = "";
      input.style.color = "";
      input.style.backgroundColor = "";
    }, 1000);
  };

  const setInvalid = (input, msg) => {
    input.classList.remove("validOk");
    input.classList.add("validError");
    input.style.borderBottom = "2px solid red";
    input.style.color = "red";
    input.style.backgroundColor = "#ff8888";
    // setTimeout(() => {
    //   input.style.borderBottom = "";
    //   input.style.color = "";
    //   input.style.backgroundColor = "";
    // }, 1000);

    const showErrorMsg = (msg) => {
      const errorSpan = document.createElement("span");
      errorSpan.style.position = "absolute";
      errorSpan.style.left = "50%";
      errorSpan.style.top = "25px";
      errorSpan.style.color = "red";
      errorSpan.style.fontFamily = "inherit";
      errorSpan.style.fontSize = "12px";
      errorSpan.style.background = "white";
      errorSpan.style.border = "1px solid red";
      errorSpan.style.padding = "5px";
      errorSpan.style.borderRadius = "10px";
      errorSpan.style.borderTopLeftRadius = "0";

      errorSpan.textContent = msg;

      input.closest("div").style.position = "relative";
      input.closest("div").append(errorSpan);

      setTimeout(() => {
        input.closest("div").removeChild(errorSpan);
      }, 1000);
    };

    msg ? showErrorMsg(msg) : null;

    // if (input.value === "") {
    //   showErrorMsg("* Обязательное поле!");
    // } else if (input.name === "user_name" && input.value.length < 2) {
    //   showErrorMsg("Длина имени минимум 2 символа");
    // }
  };

  const checkInvalid = (input) => {
    if (input.required) {
      input.addEventListener("invalid", (e) => {
        e.preventDefault();
        // setInvalid(input);
        checkValid(input);
      });
    }
  };

  const checkValid = (input) => {
    // input.addEventListener("change", () => {
    if (input.value === "") {
      setInvalid(input, "Обязательное поле");
    } else {
      if (input.name === "user_name") {
        if (input.value.length < 2) {
          setInvalid(input, "Минимум 2 символа");
        } else {
          setValid(input);
        }
      } else if (input.name === "user_email") {
        if (
          !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
            input.value
          )
        ) {
          setInvalid(input, "Некорректный адрес");
        } else {
          setValid(input);
        }
        //
      } else if (input.name === "user_phone") {
        if (input.value.length < 6 || input.value.length > 12) {
          setInvalid(input, "Укажите минимум 6 цифр ");
        } else {
          setValid(input);
        }
      }
    }

    // });
  };

  const validate = {
    words: {
      cyr: (str) => str.replace(/[^а-яА-Я\- ]/g, ""),
      lat: (str) => str.replace(/[^a-zA-Z\- ]/g, ""),
    },
    digits: (str) => str.replace(/\D/g, ""),
    mail: (str) => str.replace(/[^a-zA-Z0-9\-@_.~!'*]/g, ""),
    phone: (str) => str.replace(/[^\d\(\)\+\-]/g, ""),
    input: (i) => {
      if (i.type == "text" || i.placeholder == "Ваше сообщение") {
        i.value = validate.words.cyr(i.value);
      } else if (i.type == "email") {
        i.value = validate.mail(i.value);
      } else if (i.type == "tel") {
        i.value = validate.phone(i.value);
        i.value = i.value.slice(0, 12);
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
    if (i.required) {
      i.addEventListener("input", () => {
        validate.input(i);
        // checkValid(i);
      });
      i.addEventListener("change", () => {
        validate.input(i);
        checkValid(i);
      });
      i.addEventListener("blur", () => {
        validate.onBlur(i);
      });
      checkInvalid(i);
    }
  });

  footerFormInputs.forEach((i) => {
    i.addEventListener("input", () => {
      validate.input(i);
    });
    i.addEventListener("change", () => {
      validate.input(i);
      checkValid(i);
    });
    i.addEventListener("blur", () => {
      validate.onBlur(i);
    });
    checkInvalid(i);
  });

  popupFormInputs.forEach((i) => {
    i.addEventListener("input", () => {
      validate.input(i);
    });
    i.addEventListener("change", () => {
      validate.input(i);
      checkValid(i);
    });
    i.addEventListener("blur", () => {
      validate.onBlur(i);
    });
    checkInvalid(i);
  });

  // footerFormInputs.forEach((i) => {
  //   i.addEventListener("input", () => {
  //     validate.input(i);
  //   });
  //   i.addEventListener("blur", () => {
  //     validate.onBlur(i);
  //     checkValid(i);
  //   });
  //   checkInvalid(i);
  // });

  // popupFormInputs.forEach((i) => {
  //   i.addEventListener("input", () => {
  //     validate.input(i);
  //   });
  //   i.addEventListener("blur", () => {
  //     validate.onBlur(i);
  //     checkValid(i);
  //   });
  //   checkInvalid(i);
  // });

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
