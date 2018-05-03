// plik example1.js

console.log("Welcome in the world of js from external file");

// String (napis)
var imie = "Janek";

// Number (liczba)
var wiek = 43;

// Boolean
var czyKontynuowac = true;

// Undefined type
var nowaZmienna;

// Wartość null
var pustaZmienna = null;

// Array (tablica)
var tablicaDanych = [1, 3, 5, "osiem", "szesnaście", 24];

var powitanie = "Dzień dobry " + imie + " " + wiek;
console.log(powitanie);
// > Dzień dobry Janek 43

console.log(wiek + 12);
// > 55
console.log(imie + wiek);
// > Jakiś napis43
console.log(imie.substring(0, imie.length - 3));
// > Jakiś na

console.log(imie - wiek);
// > NaN

console.log(nowaZmienna);
console.log(pustaZmienna);

var pelnoletni = false;
if (wiek > 18) {
    pelnoletni = true;
}

if (pelnoletni) {
    console.log(imie + " jest pelnoletni");
} else {
    console.log(imie + " jest niepelnoletni");
}

var napis = "22";

if (napis == 22) {
    console.log('is a number 22');
} else {
    console.log('is not a number');
}

if (napis === 22) {
    console.log('the same type');
} else {
    console.log('different types');
}

function calculateScore(age, height) {
    return 5 * age + height;
}

var johnScore = calculateScore(25, 172);
var zoeScore = calculateScore(22, 165);

function printScore(name, score) {
    console.log(name + ' has ' + score + " points");
}

printScore("John", johnScore);
printScore("Zeo", zoeScore);

if (johnScore > zoeScore) {
    console.log('John is the winner with ' + johnScore + " points");
} else if (zoeScore > johnScore) {
    console.log('Zoe is the winner with ' + zoeScore + " points");
} else {
    console.log('Draw');
}

var names = ['Jacek', 'Krystyna', 'Stefan'];
var person = new Array('Kasia', 26, false);

console.log('names', names);
console.log(person);

person.push(168);
person.unshift("Pani");
console.log(person);

person.pop();
person.shift();
console.log(person);

person.push('developer');

if (person.indexOf('designer') > 0) {
    console.log(person, "Jest designerem");
}
if (person.indexOf('developer')) {
    console.log(person, 'Jest programistką');
}
console.log("DDDDDD", person.indexOf('developer'));

var employeeJohn = {
    firstName: 'John',
    lastName: 'Nash',
    yearOfBirth: 1985,
    'is married': true
};

console.log(employeeJohn);
console.log(employeeJohn.lastName + ' born in ' + employeeJohn.yearOfBirth);
console.log(employeeJohn['firstName'] + ' is married ' + employeeJohn['is married']);

var isMarriedField = 'is married';
employeeJohn[isMarriedField] = false;
console.log(employeeJohn[isMarriedField]);

var employeeZoe = new Object();
employeeZoe.firstName = 'Zoe';
employeeZoe.lastName = 'Thatcher';
employeeZoe.yearOfBirth = 1992;

console.log(employeeZoe);

var employeeMark = {
    firstName: 'Mark',
    lastName: 'Box',
    yearOfBirth: 1983,
    'is married': true,
    calculateAge: function () {
        var currentYear = 2018;
        return currentYear - this.yearOfBirth;
    }
};

console.log(employeeMark);
console.log('Mark is ' + employeeMark.calculateAge());

var names = ['Jacek', 'Krystyna', 'Stefan'];

for (var i = 0; i < 3; i++) {
    console.log(names[i]);
}

var j = 0;
while (j < names.length) {
    console.log(names[j]);
    j++;
}

do {
    j--;
    console.log(names[j]);
} while (j > 0);


var pojazd1 = {
    marka: 'Fiat',
    rok: 2017,
    miesiac: 10,
    potrzebnyPrzeglad: false
};

var pojazd2 = {
    marka: 'Volvo',
    rok: 2016,
    miesiac: 6,
    potrzebnyPrzeglad: true
};


var currentYear = new Date().getFullYear();
var currentMonth = new Date().getMonth();

console.log(currentYear);
console.log(currentMonth);