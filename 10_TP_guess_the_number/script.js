class GuessTheNumber {
  mysteryNumber

  constructor() {
    this.randomizeMysteryNumber()
  }

  randomizeMysteryNumber() {
    this.mysteryNumber = Math.floor(Math.random() * 100) + 1
  }

  guess(guess) {
    if (guess === this.mysteryNumber) {
      return [true, "ok"]
    } else if (guess < this.mysteryNumber) {
      return [false, "too low"]
    } else {
      return [false, "too high"]
    }
  }
}

