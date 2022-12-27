import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const options = {
enableTime: true,
time_24hr: true,
defaultDate: new Date(),
minuteIncrement: 1,
onClose(selectedDates) {
console.log(selectedDates[0]);
},
};
const fp = flatpickr(input, options );
const start = document.querySelector('button[data-start]');

start.addEventListener('click', onClick);

function onClick() {
    
}