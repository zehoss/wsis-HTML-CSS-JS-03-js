var gracz1Wiek;
var gracz1Wzrost;

var gracz2Wiek;
var gracz2Wzrost;

// gracz1Wiek = 30;
// gracz1Wzrost = 165;
//
// gracz2Wiek = 30;
// gracz2Wzrost = 167;

gracz1Wiek = parseInt(prompt("Wpisz wiek 1 gracza"));
gracz1Wzrost = parseInt(prompt("Wpisz wzrost 1 gracza"));
gracz2Wiek = parseInt(prompt("Wpisz wiek 2 gracza"));
gracz2Wzrost = parseInt(prompt("Wpisz wzrost 2 gracza"));

function calculateScore(wiek, wzrost) {
    return (5 * wiek) + wzrost;
}

function printScore(name, score) {
    console.log("Wygral gracz " + name + " z " + score + " punktami.");
}

var wynikGracz1 = calculateScore(gracz1Wiek, gracz1Wzrost);
var wynikGracz2 = calculateScore(gracz2Wiek, gracz2Wzrost);

if (wynikGracz1 > wynikGracz2) {
    printScore("gracz 1", wynikGracz1);
} else if (wynikGracz2 > wynikGracz1) {
    printScore("gracz 2", wynikGracz2);
} else {
    console.log('Remis');
}