const setDate = () => {
  const now = new Date();
  const secondsArrow = document.querySelector(".second-hand");
  const minutesArrow = document.querySelector(".min-hand");
  const hoursArrow = document.querySelector(".hour-hand");
  const arrow = document.querySelector(".hand");
  arrow.style.transition = "all 0.05s";
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();

  minutesArrow.style.transform = `rotate(${(mins / 60) * 360 + 90}deg)`;
  hoursArrow.style.transform = `rotate(${(hours / 60) * 360 + 90}deg)`;
  secondsArrow.style.transform = `rotate(${(seconds / 60) * 360 + 90}deg)`;
};

setInterval(setDate, 1000);
