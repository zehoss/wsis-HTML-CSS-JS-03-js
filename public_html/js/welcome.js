// var header = document.querySelector('.header-title > h1:nth-child(2)');

var header = document.querySelector('.header-title > h1');
console.log("znaleziony element", header);

header.textContent = "Witamy w wypożyczalni ABC";


var head = document.querySelector('.header-title');
var titles = head.querySelectorAll(':scope h1');

console.log("All titles", titles);

titles.forEach(function (title) {
    console.log('one title', title);
});


function add(a, b) {
    return a + b;
}

var result = add(2, 3);
console.log('2+3 = ', result);

var getElement = function (selector) {
    if (selector) {
        return document.querySelectorAll(selector);
    }
    return null;
};

console.log("get headers", getElement('h1'));


function sayHello(name) {
    // zmienna globalna
    hasBeenInvoked = true;

    if (name != null) {
        // zmienna lokalna (zakres funkcji)
        var text = "Hello " + name;
    } else {
        text = "Witamy na stronie";
    }
    return text;
}

if (typeof hasBeenInvoked !== 'undefined') {
    console.log("Zmienna globalna", hasBeenInvoked);
} else {
    console.log("Nieznana zmienna globalna");
}
console.log(sayHello("Janek"));
console.log(sayHello());
console.log("Zmienna globalna", hasBeenInvoked);


text = "Global variable";

function sayHello2(name) {
    if (name != null) {
        let text = "Hello " + name;
        console.log('text', text);
    }
    console.log('text', text);
}

sayHello2("Stefan");
