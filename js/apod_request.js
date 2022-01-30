
const apiKey = 'dUkU2MYXPUjLXuIRTYFaSRLs4GaLSsDWMewYaLbT';

$('#submit-input').on('click', function (e) {
    e.preventDefault();
    startAJAXRequest(apiKey, userDate);
});

function startAJAXRequest(key, date) {
    $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`,
    success: function (r) {
        console.log(r);
        displayInfo(r);
    }
    });
}