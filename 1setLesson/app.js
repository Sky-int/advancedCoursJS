'use strict';

const flights = ['Russia', 'USA', 'London', 'London', 'USA'];

const setFlights = new Set(flights);
console.log(setFlights);
setFlights.add('Paris');
console.log(setFlights);

for (const flights of setFlights) {
    console.log(flights);
}
console.log([...setFlights]);