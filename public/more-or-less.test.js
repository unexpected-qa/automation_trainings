const {onFormSubmit} = require('../public/more-or-less');

test('should increment attempt count', () => {
  document.body.innerHTML = `
    <span id="attempts">1</span>
    <input id="number" type="number" value="50"/>
    <p id="message"></p>
  `;

  const attemptsSpanElement = document.getElementById('attempts');
  const numberInputElement = document.getElementById('number');
  const messageParagraphElement = document.getElementById('message');

  onFormSubmit();

  expect(attemptsSpanElement.innerText).toBe('2');
  expect(messageParagraphElement.innerText).toBe('Try a higher number!');
});