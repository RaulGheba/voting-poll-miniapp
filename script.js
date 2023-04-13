'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  //ex1.
  registerNewAnswer() {
    //prompting the user.
    var question = '';
    for (const value of Object.values(this.options)) {
      question += `${value}\n`;
    }

    var answer = Number(
      prompt(`What is your favorite programming language?\n ${question}`)
    );

    if (answer <= 3 && answer != '') {
      console.log(`you chose option ${this.options[answer]}`);
      this.answers[answer] += 1;
    } else {
      alert(`a number was not provided or it is invalid!`);
    }
    poll.displayResults('string');
  },
  //ex3.
  displayResults(type = 'array') {
    type = prompt(`display the results as string or array?`);
    if (type == 'string') {
      var display = 'poll results:';

      for (const value of this.answers.values()) {
        display += value + ' ';
      }
      console.log(display);
    } else {
      console.log(this.answers);
    }
  },
};

//ex2.
const register = poll.registerNewAnswer;
document.querySelector('.poll').addEventListener('click', function () {
  register.call(poll);
});
