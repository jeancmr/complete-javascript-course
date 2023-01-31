'use strict';
// ############### ---- SELECTING AND MANIPULATING ELEMENTS
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 lets go partyyy';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 79;

// console.log(document.querySelector('.guess').value);
// console.log((document.querySelector('.guess').value = 24));

// #########------------ CLICK EVENTS
const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const number = document.querySelector('.number');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

check.addEventListener('click', function () {
  const guessValue = Number(guess.value);
  console.log(guessValue, typeof guessValue);

  //When there is no input
  if (!guessValue) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');

    //When player wins
  } else if (guessValue === secretNumber) {
  displayMessage('🎉 Correct Number!');
    number.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessValue !== secretNumber) {
    if (score > 1) {

    displayMessage(guessValue > secretNumber ? '📈 Too high!' : '📉 Too slow!');
        
      document.querySelector('.score').textContent = score;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
    displayMessage() = '👎 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guessValue > secretNumber) {
  //   //When guess is too slow
  // } else if (guessValue < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too slow!';
  //     document.querySelector('.score').textContent = score;
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '👎 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  number.textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  guess.value = '';
  displayMessage('Start guessing...');
  number.style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
