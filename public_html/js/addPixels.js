function addPixels(property, numberOfPixels) {
    var value = property.substr(0, property.length - 2);
    console.log('property', value);
    var value = parseInt(value) + numberOfPixels;
    console.log('property', value);
    return value + "px";
}

console.log(addPixels("200px", 30));


var header = document.querySelector('.header-title > h1');
console.log('header', header);
header.textContent = "Witamy w wypozyczalni ABC";


var head = document.querySelector('.header-title');
var titles = head.querySelectorAll(':scope h1');

console.log('titles', titles);
titles.forEach(function (title) {
    console.log('one title', title);
});

function printElement(element) {
    console.log('element', element);
}

titles.forEach(printElement);

var button = document.querySelector(".header-title a");
button.addEventListener('click', function (e) {
    alert("Kliknięto przycisk!");
    e.preventDefault();
});

var toggleHeaderClass = function () {
    var element = document.querySelector('.header-title h1');
    // if (element.classList.contains('alternative-color')){
    //     element.classList.remove('alternative-color');
    // } else {
    //     element.classList.add('alternative-color');
    // }
    // Można również użyć skróconej wersji
    element.classList.toggle('alternative-color');
};
const headerTitle = document.querySelector('.header-title h1');
headerTitle.addEventListener('dblclick', toggleHeaderClass);
