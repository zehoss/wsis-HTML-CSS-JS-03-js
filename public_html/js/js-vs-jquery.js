document.addEventListener('DOMContentLoaded', function () {
    console.log('HTML wczytany');
});

$(document).ready(function () {

    var header = document.querySelector('header a');

    header.addEventListener('click', function () {
        console.log('click na header');
    });

    var headerJQ = $('header a');
    console.log('header1', $('header'));
    console.log('header2', $('header a'));

    headerJQ.on('click', function () {
        console.log('click na header z jQuery');
    });

    headerJQ.click(function () {
        console.log('click z jQuery');
    });

    var headerJQ2 = jQuery('div.filter');
    console.log('headerJQ', headerJQ2);


    $.getJSON('http://localhost:8080/api/cars/', function (data) {
        console.log('data', data);
    })
        .fail(function () {
            console.log("Wystąpił błąd... :(");
        });

});


