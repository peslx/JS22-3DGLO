const calc = () => {
  console.log("'calc.js' подключен");
  const calc = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const calcTotal = document.getElementById("total");

  const runCalc = () => {
    console.log("total value");
  };

  calc.addEventListener("input", (e) => {
    runCalc();
  });
};

export default calc;
