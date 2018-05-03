// Zdarzenie DOMContentLoaded występuje po wczytaniu całego HTML przez przeglądarkę
// Czyli poniższy kod zostanie wykonany tylko wtedy, gdy cały HTML zostanie już wczytany.
// Dzięki temu nawet jeśli umieścimy poniższy kod w nagłówku strony, zadziała on prawidłowo.
document.addEventListener("DOMContentLoaded", function (event) {
    console.log("Strona została wczytana");

    const button = document.querySelector(".header-title a");
    button.addEventListener('click', function (e) {
        alert("Kliknięto przycisk!");
        e.preventDefault();
    });

    var toggleHeaderClass = function () {
        var element = document.querySelector('.header-title h1');
        if (element.classList.contains('alternative-color')) {
            element.classList.remove('alternative-color');
        } else {
            element.classList.add('alternative-color');
        }
    };

    const headerTitle = document.querySelector('.header-title h1');
    headerTitle.addEventListener('dblclick', toggleHeaderClass);

});
