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
    alert('Vous avez perdu ! Le nombre était ' + randomNumber);
    return location.reload();
  }

  const number = Number(numberInputElement.value);

  if (number === randomNumber) {
    alert('Félicitations ! Vous avez deviné le nombre !');
    return location.reload();
  }

  if (number < randomNumber) {
    messageParagraphElement.innerText = 'Essayez un nombre plus grand !';
    return;
  }

  if (number > randomNumber) {
    messageParagraphElement.innerText = 'Essayez un nombre plus petit !';
  }
}

debugButtonElement.addEventListener('click', () => {
  alert(randomNumber);
});