let randomNumber = Math.floor(Math.random() * 100) + 1;
let currentAttempt = 1;

const attemptsSpanElement = document.getElementById('attempts');
const messageParagraphElement = document.getElementById('message');
const numberInputElement = document.getElementById('number');
const debugButtonElement = document.getElementById('debug');

attemptsSpanElement.innerText = currentAttempt.toString();

function onFormSubmit() {
  currentAttempt++;
  attemptsSpanElement.innerText = currentAttempt.toString();

  messageParagraphElement.innerText = '';

  if (currentAttempt > 10) {
    alert('You lost! The number was ' + randomNumber);
    return location.reload();
  }

  const number = Number(numberInputElement.value);

  if (number === randomNumber) {
    alert('Congratulations! You guessed the number!');
    return location.reload();
  }

  if (number < randomNumber) {
    messageParagraphElement.innerText = 'Try a higher number!';
    return
  }

  if (number > randomNumber) {
    messageParagraphElement.innerText = 'Try a lower number!';
  }
}

debugButtonElement.addEventListener('click', () => {
  alert(randomNumber);
})