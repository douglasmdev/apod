const dateInput = $('#date-input')[0];

const date = new Date();
const currentYear = date.getFullYear();
let currentMonth = date.getMonth() + 1;
if (currentMonth < 10)
    currentMonth = `0${currentMonth}`;
let currentDay = date.getDate();
if (currentDay < 10)
    currentDay = `0${currentDay}`;
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;


dateInput.setAttribute('max', currentDate);
dateInput.setAttribute('value', currentDate);

let userDate = dateInput.value;

dateInput.onchange = function () {
    userDate = dateInput.value; 
}
