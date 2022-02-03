'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 5;*/
let s = 20;
let hs = 0;
let num = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.check').addEventListener('click', function () {
  const g = Number(document.querySelector('.guess').value);
  console.log(g);
  if (!g) {
    document.querySelector('.message').textContent = 'No number';
  } else if (g === num) {
    document.querySelector('.number').textContent = num;
    document.querySelector('.message').textContent = 'Correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (s > hs) {
      hs = s;
      document.querySelector('.highscore').textContent = hs;
    }
  } else if (g > num) {
    document.querySelector('.message').textContent = 'Too high';
    s--;
    document.querySelector('.score').textContent = s;
  } else if (g < num) {
    document.querySelector('.message').textContent = 'Too low';
    s--;
    document.querySelector('.score').textContent = s;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  s = 20;
  num = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = s;
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'black';
});

document.querySelector('.reset').addEventListener('click', function () {
  hs = 0;
  document.querySelector('.highscore').textContent = hs;
});
///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
