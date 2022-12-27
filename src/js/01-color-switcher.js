function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyColor = document.querySelector("body");
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');


btnStart.addEventListener('click', onClick);
btnStop.addEventListener('click', onClickStop);

function onClick(event) {
    btnStart.disabled = true;
    btnStop.disabled = false;
    timerId = setInterval(() => {
    let color = getRandomHexColor();
    bodyColor.style.backgroundColor = color;
 },1000)
 
} 

function onClickStop() {
    btnStart.disabled = false;
    btnStop.disabled = true;
    clearInterval(timerId);
}