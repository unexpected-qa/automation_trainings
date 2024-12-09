Feature: Hangman Game

  Scenario: Displaying the Hangman game page
    Given I am on the Home page
    When I navigate to the Hangman page
    Then I should see the Hangman game title
    And I should see the game instructions
    And I should see the letter input field
    And I should see the submit button
    And I should see the hangman drawing area

  Scenario: Starting a new game
    Given I am on the Hangman game page
    When I click the "New Game" button
    Then a new word should be selected
    And the hangman drawing should be reset
    And the letter input field should be enabled

  Scenario: Guessing a correct letter
    Given I am on the Hangman game page
    And a new game has started
    When I enter a correct letter in the input field
    And I click the "Submit" button
    Then the letter should be displayed in the correct position(s)
    And the letter input field should be cleared

  Scenario: Guessing an incorrect letter
    Given I am on the Hangman game page
    And a new game has started
    When I enter an incorrect letter in the input field
    And I click the "Submit" button
    Then the hangman drawing should be updated
    And the letter input field should be cleared

  Scenario: Winning the game
    Given I am on the Hangman game page
    And a new game has started
    And I have guessed all the letters correctly
    When I guess the final correct letter
    Then I should see a "You Win!" message
    And the letter input field should be disabled

  Scenario: Losing the game
    Given I am on the Hangman game page
    And a new game has started
    And I have made the maximum number of incorrect guesses
    When I guess the final incorrect letter
    Then I should see a "Game Over" message
    And the letter input field should be disabled