const calc = (price = 100) => {
  console.log("'calc.js' подключен");
  const calc = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const calcTotal = document.getElementById("total");

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
      const calcTotalValue =
        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;

      console.log(
        `${price} * ${calcTypeValue} * ${calcSquareValue} * ${calcCountValue} * ${calcDayValue} = ${calcTotalValue}`
      );

      calcTotal.textContent = calcTotalValue;
    }

    //
  };

  calc.addEventListener("input", (e) => {
    runCalc();
  });
};

export default calc;
