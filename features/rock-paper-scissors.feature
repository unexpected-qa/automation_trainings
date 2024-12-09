Feature: Rock Paper Scissors Game

  Scenario: Displaying the Rock Paper Scissors game page
    Given I am on the Home page
    When I navigate to the Rock Paper Scissors page
    Then I should see the Rock Paper Scissors game title
    And I should see the game instructions
    And I should see the rock button
    And I should see the paper button
    And I should see the scissors button
    And I should see the result display area

  Scenario: Starting a new game
    Given I am on the Rock Paper Scissors game page
    When I click the "New Game" button
    Then the game should be reset
    And the result display area should be cleared

  Scenario: Playing Rock
    Given I am on the Rock Paper Scissors game page
    And a new game has started
    When I click the "Rock" button
    Then the game should display the result based on the computer's choice
    And the result display area should be updated

  Scenario: Playing Paper
    Given I am on the Rock Paper Scissors game page
    And a new game has started
    When I click the "Paper" button
    Then the game should display the result based on the computer's choice
    And the result display area should be updated

  Scenario: Playing Scissors
    Given I am on the Rock Paper Scissors game page
    And a new game has started
    When I click the "Scissors" button
    Then the game should display the result based on the computer's choice
    And the result display area should be updated

  Scenario: Winning the game
    Given I am on the Rock Paper Scissors game page
    And a new game has started
    When I make a winning choice
    Then I should see a "You Win!" message in the result display area

  Scenario: Losing the game
    Given I am on the Rock Paper Scissors game page
    And a new game has started
    When I make a losing choice
    Then I should see a "You Lose!" message in the result display area

  Scenario: Drawing the game
    Given I am on the Rock Paper Scissors game page
    And a new game has started
    When I make a choice that matches the computer's choice
    Then I should see a "It's a Draw!" message in the result display area