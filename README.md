# Happn QA JS & WDIO Training

This project is a training application for Happn QA, featuring several web games implemented using old school HTML, CSS,
and JavaScript. The games included are Hangman, More Or Less, Puzzle (9 pieces), and Rock Paper Scissors. The project
also includes BDD (Behavior-Driven Development) specifications written in Gherkin.

## Project Structure

- `public/`: Contains the HTML, CSS, and JavaScript files for the web games.
    - `index.html`: The home page of the application.
    - `hangman.html`, `more-or-less.html`, `puzzle.html`, `rock-paper-scissors.html`: The individual game pages.
    - `main.css`, `home.css`: The main stylesheets.
    - `hangman.css`, `more-or-less.css`, `puzzle.css`, `rock-paper-scissors.css`: The stylesheets for the individual
      games.
    - `hangman.js`, `more-or-less.js`, `puzzle.js`, `rock-paper-scissors.js`: The JavaScript files for the individual
      games.
- `features/`: Contains the Gherkin BDD specifications.
    - `navigation.feature`: Specifications for navigating through the app.
    - `hangman.feature`, `more-or-less.feature`, `puzzle.feature`, `rock-paper-scissors.feature`: Specifications for the
      individual games.
- `package.json`: Contains the project metadata and dependencies.

## Installation

To set up the project, follow these steps:

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Running the Application

To start the application, use the following command:

```sh
npm run start
```

This will serve the `public` directory, allowing you to access the application in your web browser.

## Running Tests

To run the WebdriverIO tests, use the following command:

```sh
npm test
```

## Games

### Hangman

A classic word-guessing game where you try to guess the word by suggesting letters within a certain number of guesses.

### More Or Less

A number guessing game where you try to guess a randomly generated number, with hints provided whether the guess is
higher or lower.

### Puzzle (9 pieces)

A sliding puzzle game where you need to arrange the pieces in the correct order.

### Rock Paper Scissors

A simple game where you play Rock, Paper, Scissors against the computer.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.