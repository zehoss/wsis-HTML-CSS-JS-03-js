function Vehicle(name, year) {
    this.name = name;
    this.year = year;
    this.available = true;
}

var UiService = (function () {

    function clearCarsTable() {
        var rows = document.querySelectorAll('table.carsTable tbody > tr');
        for (var i = rows.length - 1; i >= 0; i--) {
            rows[i].remove();
        }
    }

    function getTableCell(value) {
        var tableCell = document.createElement('td');
        tableCell.textContent = value;
        return tableCell;
    }

    function getCarRow(car) {
        var tr = document.createElement("tr");

        var tdName = getTableCell(car.name);
        var tdYear = getTableCell(car.year);
        var tdAvailability = getTableCell(car.available ? "Dostępny" : "Niedostępny");

        tr.appendChild(tdName);
        tr.appendChild(tdYear);
        tr.appendChild(tdAvailability);

        return tr;
    }

    function clearInputs() {
        var form = document.querySelector('form[name="addNewCarForm"]');
        var name = form.querySelector(':scope input[name="name"]').value = '';
        var year = form.querySelector(':scope input[name="year"]').value = '';
    }

    return {
        readInputs: function () {
            var form = document.querySelector('form[name="addNewCarForm"]');
            var name = form.querySelector(':scope input[name="name"]').value;
            var year = form.querySelector(':scope input[name="year"]').value;
            clearInputs();
            return new Vehicle(name, year);
        },

        renderCars: function (carList) {
            var i;
            clearCarsTable();

            var table = document.querySelector('table.carsTable tbody');

            for (i = 0; i < carList.length; i++) {
                var carRow = getCarRow(carList[i]);
                table.appendChild(carRow);
            }
        }
    }
})();


var CarService = (function () {
    var cars = [];

    function storeInLocalStorage() {
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem('carsList', JSON.stringify(cars));
        } else {
            console.log('No local storage...');
        }
    }

    function restoreFromLocalStorage() {
        if (typeof(Storage) !== "undefined") {
            if (localStorage.getItem('carsList')) {
                cars = JSON.parse(localStorage.getItem('carsList'));
            }
        } else {
            console.log('No local storage...');
        }
    }

    return {
        getCarList: function () {
            return cars;
        },
        addCar: function (car) {
            cars.push(car);
            storeInLocalStorage();
        },
        restoreData: function () {
            restoreFromLocalStorage();
        }
    }
})();


var ApplicationCtrl = (function (UiService, CarsService) {
    var ui = UiService;
    var carsService = CarsService;

    carsService.restoreData();

    ui.renderCars(carsService.getCarList());

    document.querySelector('form[name="addNewCarForm"] button').addEventListener('click', function (event) {
        // read form data
        var newCar = ui.readInputs();

        // add new car to the list
        carsService.addCar(newCar);

        // refresh the table
        ui.renderCars(carsService.getCarList());

        // stop default button action
        event.preventDefault();
    });

})(UiService, CarService);
