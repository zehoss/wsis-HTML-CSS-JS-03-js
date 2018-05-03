var headerTitleLink = document.querySelector('.header-title a');

headerTitleLink.addEventListener('click', function (event) {

    document.querySelector('.brown-section').scrollIntoView();

    event.preventDefault();
});