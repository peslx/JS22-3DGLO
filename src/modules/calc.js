import { help, animate } from "./helpers";

const calc = (price = 100) => {
  // console.log("'calc.js' подключен");
  const calc = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const calcTotal = document.getElementById("total");

  let calcTotalValue = 0;

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

    if (calcTypeValue && calcSquareValue !== 0) {
      calcTotalValue =
        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;

      animate({
        duration: 750,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          calcTotal.textContent = Math.ceil(calcTotalValue * progress);
        },
      });
    } else if (calcSquareValue === 0 || !calcTypeValue) {
      calcTotal.textContent = 0;
    }
  };

  calc.addEventListener("change", (e) => {
    runCalc();
  });

  help("'calc.js'");
};

export default calc;
