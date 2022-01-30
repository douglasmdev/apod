
const resultField = $('#result-field')[0];
const resultTitleField = $('#result-title')[0];
const resultImgField = $('#result-image')[0];
const resultExpField = $('#result-explanation')[0];

function displayInfo(requestResult) {
    resultTitleField.innerText = requestResult.title;
    resultImgField.setAttribute('src', requestResult.hdurl);
    resultExpField.innerText = requestResult.explanation;
}