import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startBtn = document.querySelector('button[data-start]');
const timer = document.querySelector('.timer');
const dataDays = document.querySelector('span[data-days');
const dataHours = document.querySelector('span[data-hours]')
const dataMinutes = document.querySelector('span[data-minutes]')
const dataSeconds = document.querySelector('span[data-seconds]')
let timerId = null;
startBtn.disabled = true;

const field = document.querySelector('.field')
timer.style.dispay = "flex";
field.style.dispay = "flex";
field.style.alignItems= "center";
field.style.flexDirection= "column";
field.style.marginTop = "20px";
field.style.marginRight = "40px";    


const input = document.querySelector('#datetime-picker');
const options = {
enableTime: true,
time_24hr: true,
defaultDate: new Date(),
minuteIncrement: 1,
    onClose(selectedDates) {
    if (selectedDates[0] <= new Date) {
    Notiflix.Notify.failure('Please choose a date in the future');
        startBtn.disabled = true;     
    } else 
        startBtn.disabled = false;
    
        console.log(selectedDates[0]);
},
};

flatpickr(input, options);

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
 
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

startBtn.addEventListener('click', onClick);



function onClick() {
    timerId = setInterval(() => {

    let countDown = new Date(input.value) - new Date();
        if (countDown >= 0) {
            let time = convertMs(countDown)
   
            dataDays.textContent = addLeadingZero(time.days);
            dataHours.textContent = addLeadingZero(time.hours);
            dataMinutes.textContent = addLeadingZero(time.minutes);
            dataSeconds.textContent = addLeadingZero(time.seconds);
            if (countDown <= 10000) {
             timer.style.color = 'tomato';
               }
        } else {
      Notiflix.Notify.success('CountDown finished');
      timer.style.color = 'black';
      clearInterval(timerId);
     }
       
  }, 1000)
}








