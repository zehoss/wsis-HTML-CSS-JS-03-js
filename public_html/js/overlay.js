var overlay = document.querySelector('#overlay');
overlay.querySelector(':scope button').addEventListener('click', function () {
    overlay.style.display = "none";
});

var tileButtons = document.querySelectorAll('.tile-action');
tileButtons.forEach(function (tileButton) {
    tileButton.addEventListener('click', function (event) {
        var tile = this.parentElement;
        overlay.style.display = "block";

        var name = tile.querySelector(':scope .tile-header').textContent;
        var seats = tile.querySelector(':scope tr:nth-child(1) td:nth-child(2)').textContent;
        var limit = tile.querySelector(':scope tr:nth-child(2) td:nth-child(2)').textContent;
        var imageSrc = tile.querySelector(':scope .tile-img').src;


        overlay.querySelector(':scope div.name > span').textContent = name;
        overlay.querySelector(':scope div.seats > span').textContent = seats;
        overlay.querySelector(':scope div.limit > span').textContent = limit;
        overlay.querySelector(':scope img').src = imageSrc;
    });
});
