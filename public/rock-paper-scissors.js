const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

const playerScoreElement = document.getElementById('player');
const computerScoreElement = document.getElementById('computer');
const winnerElement = document.getElementById('winner');

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));
document.getElementById('play').addEventListener('click', resetGame);

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const result = determineWinner(playerChoice, computerChoice);

  if (result === 'player') {
    playerScore++;
    winnerElement.innerText = 'Winner: Player';
  } else if (result === 'computer') {
    computerScore++;
    winnerElement.innerText = 'Winner: Computer';
  } else {
    winnerElement.innerText = 'Winner: None (Draw)';
  }

  playerScoreElement.innerText = `Player: ${playerScore}`;
  computerScoreElement.innerText = `Computer: ${computerScore}`;
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'draw';
  }

  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'player';
  } else {
    return 'computer';
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreElement.innerText = 'Player: 0';
  computerScoreElement.innerText = 'Computer: 0';
  winnerElement.innerText = 'Winner: None';
}