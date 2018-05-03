var aboutSection = document.querySelector('.section-about');
var readMoreButton = aboutSection.querySelector(':scope a.readMore');
var hideButton = aboutSection.querySelector(':scope a.hideButton');

var paragraphs = aboutSection.querySelectorAll(':scope p');

function hideParagraphs(paragraphs) {
    var i;
    for (i = 1; i < paragraphs.length; i++) {
        var paragraph = paragraphs[i];
        paragraph.style.display = "none";
    }
}

function showParagraphs(paragraphs) {
    var i;
    for (i = 1; i < paragraphs.length; i++) {
        var paragraph = paragraphs[i];
        paragraph.style.display = "block";
    }
}


hideParagraphs(paragraphs);

readMoreButton.addEventListener('click', function (event) {
    showParagraphs(paragraphs);
    readMoreButton.style.display = "none";
    hideButton.style.display = "inline";
    event.preventDefault();
});

hideButton.addEventListener('click', function (event) {
    hideParagraphs(paragraphs);
    readMoreButton.style.display = "inline";
    hideButton.style.display = "none";
    event.preventDefault();
});