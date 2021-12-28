const heroTimer = (deadline) => {
  console.log("'heroTimer.js' подключен");

  const timer = document.getElementById("timer");
  const timerDays = document.getElementById("timer-days");
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const getTimeToDeadline = (deadline) => {
    let stopDate = new Date(deadline).getTime();
    let nowDate = new Date().getTime();
    let remTime = Math.floor((stopDate - nowDate) / 1000);
    let days = Math.floor(remTime / 60 / 60 / 24);
    // let hours = Math.floor((remTime / 60 / 60) % 24);
    let hours = Math.floor(remTime / 60 / 60);
    let minutes = Math.floor((remTime / 60) % 60);
    let seconds = Math.floor(remTime % 60);
    return { days, hours, minutes, seconds, remTime };
  };

  const refreshTime = () => {
    let time = getTimeToDeadline(deadline);
    timerDays.textContent = `${prop(time.days)} дня, `;
    timerHours.textContent = prop(time.hours);
    timerMinutes.textContent = prop(time.minutes);
    timerSeconds.textContent = prop(time.seconds);
    // console.log(time.remTime);
    if (time.remTime <= 0) {
      clearInterval(timerID);
      setInterval(stopMsg, 2000);
      timerDays.textContent = ``;
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    }
  };

  const prop = (num) => {
    let res = String(num);
    if (res.length < 2) res = `0${res}`;
    return res;
  };
  const stopMsg = () => {
    timer.innerHTML = "Акция завершена!";
    // timer.textContent = "Время вышло!";
    // timerHours.style.display = "none";
    // timerMinutes.style.display = "none";
    // timerSeconds.style.display = "none";
  };

  let timerID = setInterval(refreshTime, 1000);
};

export default heroTimer;
