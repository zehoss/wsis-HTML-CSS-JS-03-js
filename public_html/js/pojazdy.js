var pojazd1 = {
    marka: "Fiat",
    rok: 2017,
    miesiac: 10
};

var pojazd2 = {
    marka: "Audi",
    rok: 2017,
    miesiac: 2
};

var pojazd3 = {
    marka: "BMW",
    rok: 2016,
    miesiac: 10
};

var pojazdy = [pojazd1, pojazd2, pojazd3];

console.log(pojazdy);


function przeterminowanePojazdy(pojazdy) {
    var i;
    var currentYear = new Date().getFullYear();
    var yearAgo = currentYear - 1;
    var currentMonth = new Date().getMonth();

    for (i = 0; i < pojazdy.length; i++) {
        var pojazd = pojazdy[i];
        if (pojazd.rok < yearAgo) {
            pojazd.potrzebnyPrzeglad = true;
        } else if (pojazd.rok === yearAgo && pojazd.miesiac < currentMonth) {
            pojazd.potrzebnyPrzeglad = true;
        } else {
            pojazd.potrzebnyPrzeglad = false;
        }
    }

    return pojazdy;
}


console.log(przeterminowanePojazdy([pojazd1, pojazd2, pojazd3]));