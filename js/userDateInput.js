
const dateInput = $('#date-input')[0];
let userDate = dateInput.value;

dateInput.onchange = function () {
    userDate = dateInput.value; 
}
