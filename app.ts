const clock = document.querySelector(".clock") as HTMLElement;

const secondHand = document.querySelector(".second-hand") as HTMLElement;
const minuteHand = document.querySelector(".minute-hand") as HTMLElement;
const hourHand = document.querySelector(".hour-hand") as HTMLElement;
const switchBtn = document.querySelector(".switch-btn") as HTMLButtonElement;

function updateTime() {
  const now = new Date();

  if (secondHand === null || minuteHand === null || hourHand === null) return;

  // SECOND
  const second = now.getSeconds();
  secondHand.style.transform = `rotate(${second * 6}deg)`;

  // MINUTE
  const minute = now.getMinutes();
  minuteHand.style.transform = `rotate(${minute * 6}deg)`;

  // HOUR
  const hour = now.getHours();
  hourHand.style.transform = `rotate(${hour * 6}deg)`;
}

setInterval(updateTime, 1000);
updateTime();



function switchTheme() {
    clock.classList.toggle("active");
    minuteHand.classList.toggle("active");
    hourHand.classList.toggle("active");
    switchBtn.classList.toggle("active");

    
}
switchBtn.addEventListener("click", switchTheme);
