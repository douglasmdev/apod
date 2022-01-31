const dateInput = $('#date-input')[0];

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

dateInput.setAttribute('max', currentDate);

let userDate = dateInput.value;

dateInput.onchange = function () {
    userDate = dateInput.value; 
}
