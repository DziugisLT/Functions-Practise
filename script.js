'use strict';

/* const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
   numPassengers = numPassengers || 1;
  price = price || 199; 

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
 */

/* const flight = 'LH234';
const jonas = {
  name: 'db',
  passport: 411650664616,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 411650664616) {
    alert('check in');
  } else {
    alert('wrong');
  }
};

checkIn(flight, jonas); */

/* const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

greet('hello')('jonas'); */

/* const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Dziugas');
lufthansa.book(635, 'John');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 23, 'Sarah');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary');
console.log(lufthansa); */

/* const addTax = function (rate) {
  return function (value) {
    console.log(value + value * rate);
  };
};

const addVAT = addTax(0.23);
addVAT(100);
 */

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    if (typeof answer === 'number' && answer >= 0 && answer <= 3) {
      this.answers[answer]++;
    } else {
      console.log('Incorrect answer.');
    }
    this.displayResults(this.answers);
    // this.displayResults()(this.answers); // Alternative to call
  },
  displayResults: function (type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers}`);
    }
    /* return function (results) {
      if (type === 'array') {
        console.log(results);
      } else if (type === 'string') {
        console.log(`Poll results are ${results}`);
      }
    }; */ //Alternative to call
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// poll.displayResults('string')([5, 2, 3]);  // Alternative to call
