
const resultField = $('#result-field')[0];
const resultTitleField = $('#result-title')[0];
const resultImgField = $('#result-image')[0];
const resultVidField = $('#result-video')[0];
const resultExpField = $('#result-explanation')[0];

function isVideo(requestResult) {
    if (requestResult.media_type == 'video')
        return true;

    return false;
}

function displayMedia(requestResult) {
    if (!isVideo(requestResult)) {
        $('#result-video').hide();
        $('#result-image').show();
        resultImgField.setAttribute('src', requestResult.hdurl);
    } else {
        $('#result-image').hide();
        $('#result-video').show();
        resultVidField.setAttribute('src', requestResult.url);
    }
        
}

function displayInfo(requestResult) {
    $(resultImgField).empty();
    resultTitleField.innerText = requestResult.title;
    displayMedia(requestResult);
    resultExpField.innerText = requestResult.explanation;
}