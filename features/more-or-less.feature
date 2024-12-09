Feature: More Or Less Game

  Scenario: Displaying the More Or Less game page
    Given I am on the Home page
    When I navigate to the More Or Less page
    Then I should see the More Or Less game title
    And I should see the game instructions
    And I should see the number input field
    And I should see the submit button
    And I should see the result display area

  Scenario: Starting a new game
    Given I am on the More Or Less game page
    When I click the "New Game" button
    Then a new target number should be generated
    And the number input field should be enabled
    And the result display area should be cleared

  Scenario: Guessing a correct number
    Given I am on the More Or Less game page
    And a new game has started
    When I enter the correct number in the input field
    And I click the "Submit" button
    Then I should see a "Correct!" message in the result display area
    And the number input field should be disabled

  Scenario: Guessing a lower number
    Given I am on the More Or Less game page
    And a new game has started
    When I enter a number lower than the target number in the input field
    And I click the "Submit" button
    Then I should see a "Higher!" message in the result display area
    And the number input field should be cleared

  Scenario: Guessing a higher number
    Given I am on the More Or Less game page
    And a new game has started
    When I enter a number higher than the target number in the input field
    And I click the "Submit" button
    Then I should see a "Lower!" message in the result display area
    And the number input field should be cleared

  Scenario: Winning the game
    Given I am on the More Or Less game page
    And a new game has started
    And I have guessed the correct number
    When I guess the final correct number
    Then I should see a "You Win!" message
    And the number input field should be disabled

  Scenario: Losing the game
    Given I am on the More Or Less game page
    And a new game has started
    And I have made the maximum number of incorrect guesses
    When I guess the final incorrect number
    Then I should see a "Game Over" message
    And the number input field should be disabled