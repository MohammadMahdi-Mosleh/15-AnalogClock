const clock = document.querySelector(".clock") as HTMLElement;

const secondHand = document.querySelector(".second-hand") as HTMLElement;
const minuteHand = document.querySelector(".minute-hand") as HTMLElement;
const hourHand = document.querySelector(".hour-hand") as HTMLElement;
const switchBtn = document.querySelector(".switch-btn") as HTMLButtonElement;

function updateTime() {
  const now = new Date();

  const second = now.getSeconds();
  const ms = now.getMilliseconds();
  const secondDegrees = second * 6 + ms * 0.006;
  secondHand.style.transform = `translate(-50%, 0) rotate(${secondDegrees}deg)`;

  const minute = now.getMinutes();
  const minuteDegrees = minute * 6 + second * 0.1;
  minuteHand.style.transform = `translate(-50%, 0) rotate(${minuteDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour % 12) * 30 + minute * 0.5;
  hourHand.style.transform = `translate(-50%, 0) rotate(${hourDegrees}deg)`;
}

setInterval(updateTime, 1000);
updateTime();

function switchTheme() {
  clock.classList.toggle("active");
  minuteHand.classList.toggle("active");
  hourHand.classList.toggle("active");
  switchBtn.classList.toggle("active");

  if (switchBtn.textContent.toLowerCase() === "dark mode") {
    switchBtn.textContent = "lite mode";
  } else {
    switchBtn.textContent = "dark mode";
  }
}
switchBtn.addEventListener("click", switchTheme);
