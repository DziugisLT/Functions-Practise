'use strict';

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
