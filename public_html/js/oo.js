var fiat = {
    name: "Fiat 500",
    year: 2017,
    toString: function () {
        return "Vehicle " + this.name + " produced in " + this.year;
    }
};

console.log(fiat.toString());


var Vehicle = function (name, year) {
    this.name = name;
    this.year = year;
    this.toString = function () {
        return "Vehicle " + this.name + " produced in " + this.year;
    }
};

var fiat = new Vehicle("Fiat", 2016);
var volvo = new Vehicle("Volvo", 2018);
var mercedes = new Vehicle("Mercedes", 2017);

fiat.getAge = function () {
    return 2018 - this.year;
};

Vehicle.prototype.getAge = function () {
    return 2018 - this.year;
};

console.log(fiat);
console.log(fiat.getAge());

console.log(volvo);
// console.log(volvo.getAge());


console.log(fiat.hasOwnProperty('getAge'));     // true
console.log(volvo.hasOwnProperty('getAge'));    // false
console.log(Vehicle.hasOwnProperty('getAge'));  // false


document.addEventListener('keypress', function (event) {
    console.log('handle keypress', event)
});


var greetSomeone = (function (name) {
    var greetings = "Hello " + name;
    // any code here
    return greetings;
})('Stefan');

console.log(greetSomeone);


var UIService = (function () {
    // private section
    var name = "Wally";
    var getGreeting = function () {
        return "Hello " + name;
    };

    return {
        // public section
        x: 5,

        getGreetingText: function () {
            return getGreeting();
        },

        sayHello: function () {
            console.log(this.getGreetingText());
        }
    }

})();

// console.log(UIService.name);             // error
// console.log(UIService.getGreeting());    // error

console.log(UIService.x);
console.log(UIService.getGreetingText());
UIService.sayHello();


var header = document.querySelectorAll('h1');
var header2 = document.querySelector('h1');
var container = document.querySelector('div');


document.querySelector('div.container h1, h2');


var main_header = document.querySelector('h1');


var naglowekH1 = document.querySelectorAll('h1');

for (var i = 0; i >= naglowekH1.length; i++) {
    naglowekH1[i].textContent = 'tekst';
}










