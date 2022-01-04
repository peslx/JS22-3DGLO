import { help } from "./helpers";

const calc = (price = 100) => {
  console.log("'calc.js' подключен");
  const calc = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const calcTotal = document.getElementById("total");

  let calcTotalValue = 0;
  let dur = 139;
  let total = 0;
  let a;

  const animateCalc = () => {
    total += dur;

    // console.log(total);

    a = requestAnimationFrame(animateCalc);
    calcTotal.textContent = total;
    if (total >= calcTotalValue) {
      total = calcTotalValue;
      calcTotal.textContent = total;
      cancelAnimationFrame(a);
    }
  };

  const runCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = +calcSquare.value;
    let calcCountValue = 1;
    let calcDayValue;

    if (+calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (+calcDay.value === 0) {
      calcDayValue = 1;
    } else if (+calcDay.value < 5) {
      calcDayValue = 2;
    } else if (+calcDay.value < 10) {
      calcDayValue = 1.5;
    } else {
      calcDayValue = 1;
    }

    if (calcTypeValue && calcSquareValue) {
      calcTotalValue =
        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;

      // console.log(
      //   `${price} * ${calcTypeValue} * ${calcSquareValue} * ${calcCountValue} * ${calcDayValue} = ${calcTotalValue}`
      // );

      animateCalc();
    }

    //
  };

  calc.addEventListener("input", (e) => {
    runCalc();
  });

  help("'calc.js'");
};

export default calc;
