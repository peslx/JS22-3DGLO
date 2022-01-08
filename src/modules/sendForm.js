const sendForm = ({ formID, extraData = [] }) => {
  console.log(`'sendForm.js (id:${formID})' подключен`);
  const form = document.getElementById(formID);

  const statusBar = document.createElement("div");
  const loadingTxt = "Отправка...";
  const successTxt = "Форма успешно отправлена";
  const errorTxt = "Ошибка отправки =(";

  const removeValid = (input) => {
    input.classList.remove("validOk");
    input.classList.remove("validOk");
    input.style.borderBottom = "";
    input.style.color = "";
    input.style.backgroundColor = "";
  };

  const validateForm = (inps) => {
    let res = true;
    inps.forEach((i) => {
      if (i.classList.contains("validError")) {
        res = false;
      }
    });
    return res;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  };

  const submitForm = () => {
    const formData = new FormData(form);
    const inputs = form.querySelectorAll("input");

    const body = {};

    statusBar.textContent = loadingTxt;
    form.append(statusBar);

    formData.forEach((value, key) => {
      body[key] = value;
    });
    extraData.forEach((item) => {
      const node = document.getElementById(item.id);
      console.log(node);
      if (item.type === "block") {
        body[item.id] = node.textContent;
      } else if (item.type === "input") {
        body[item.id] = node.value;
      }
    });

    if (validateForm(inputs)) {
      sendData(body).then((data) => {
        statusBar.textContent = successTxt;
        inputs
          .forEach((input) => {
            input.value = "";
            removeValid(input);
          })
          .catch((error) => {
            statusBar.textContent = errorTxt;
          });
      });
    } else {
      console.error("Данные не введены или неверны");
    }
  };

  try {
    if (!form) {
      throw new Error(`Форма ${formID} отсутствует`);
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }

  //
};

export default sendForm;
