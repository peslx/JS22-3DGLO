import heroTimer from "./modules/heroTimer";
import menu from "./modules/menu";
import popup from "./modules/popup";
import validation from "./modules/validation";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";

heroTimer("14 january 2022 13:00");
menu();
popup();
validation();
tabs();
slider(true); // true - добавляет 'dots'
calc();
sendForm({
  formID: "form1",
  extraData: [
    {
      type: "block",
      id: "total",
    },
  ],
});

sendForm({
  formID: "form2",
});

sendForm({
  formID: "form3",
});
