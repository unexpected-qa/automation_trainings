let randomNumber = Math.floor(Math.random() * 100) + 1;
let currentAttempt = 1;

const attemptsSpanElement = document.getElementById('attempts');
const messageParagraphElement = document.getElementById('message');
const numberInputElement = document.getElementById('number');
const debugButtonElement = document.getElementById('debug');

attemptsSpanElement.innerText = currentAttempt.toString();

function incrementCurrentAttempts() {
  currentAttempt++;
}

function getUserInputNumber() {
  const userInputNumber = Number(numberInputElement.value);
  return userInputNumber
}

function displayGameOver(gameOverReason) {
  let message = ""
  if (gameOverReason === 'maxAttempts') {
    message = 'You lost! The number was ' + randomNumber
  } else if (gameOverReason === 'win') {
    message = 'Congratulations! You guessed the number!'
  }
  
  alert(message);
  location.reload();
}

function updateMessage(message) {
  messageParagraphElement.innerText = message;
}

function onFormSubmit() {
  attemptsSpanElement.innerText = currentAttempt.toString();
  
  incrementCurrentAttempts();

  messageParagraphElement.innerText = '';

  if (currentAttempt > 10) displayGameOver('maxAttempts');

  const number = getUserInputNumber();

  if (number === randomNumber) displayGameOver('win');
  else if (number < randomNumber) updateMessage('Try a higher number!');
  else updateMessage('Try a lower number!');
}

debugButtonElement.addEventListener('click', () => {
  alert(randomNumber);
})