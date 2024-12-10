const dictionary = [
  'happn',
  'ios',
  'android',
  'webdriver',
  'quality',
];

const hangmanImages = [
  'assets/hangman-0.png',
  'assets/hangman-1.png',
  'assets/hangman-2.png',
  'assets/hangman-3.png',
  'assets/hangman-4.png',
  'assets/hangman-5.png',
  'assets/hangman-6.png',
  'assets/hangman-7.png',
];

let selectedWord = dictionary[Math.floor(Math.random() * dictionary.length)];
let guessedLetters = [];
let wrongGuesses = 0;

const hangmanImageElement = document.getElementById('hangman-image');
const wordElement = document.getElementById('word');
const alphabetButtons = document.querySelectorAll('#alphabet button');
const livesElement = document.getElementById('lives');

function updateWordDisplay() {
  wordElement.innerHTML = '';
  for (let letter of selectedWord) {
    const letterElement = document.createElement('img');
    letterElement.src = guessedLetters.includes(letter) ? `assets/Twitter-Twemoji-Alphabet-Letter-${letter.toUpperCase()}.512.png` : 'assets/letter-empty.png';
    wordElement.appendChild(letterElement);
  }
}

function updateHangmanImage() {
  hangmanImageElement.src = hangmanImages[wrongGuesses];
}

function updateLivesDisplay() {
  livesElement.innerHTML = '';
  for (let i = 0; i < 7 - wrongGuesses; i++) {
    const heartElement = document.createElement('img');
    heartElement.src = 'assets/heart.png';
    livesElement.appendChild(heartElement);
  }
}

function checkGameOver() {
  if (wrongGuesses >= 7) {
    alert(`Game Over! The word was: ${selectedWord}`);
    resetGame();
  } else if (selectedWord.split('').every(letter => guessedLetters.includes(letter))) {
    alert('Congratulations! You guessed the word!');
    resetGame();
  }
}

function handleLetterClick(event) {
  const letter = event.target.alt.toLowerCase();
  if (selectedWord.includes(letter)) {
    guessedLetters.push(letter);
  } else {
    wrongGuesses++;
  }
  updateWordDisplay();
  updateHangmanImage();
  updateLivesDisplay();
  checkGameOver();
}

function resetGame() {
  selectedWord = dictionary[Math.floor(Math.random() * dictionary.length)];
  guessedLetters = [];
  wrongGuesses = 0;
  updateWordDisplay();
  updateHangmanImage();
  updateLivesDisplay();
}

alphabetButtons.forEach(button => button.addEventListener('click', handleLetterClick));

resetGame();