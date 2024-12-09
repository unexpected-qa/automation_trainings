Feature: Puzzle Game

  Scenario: Displaying the Puzzle game page
    Given I am on the Home page
    When I navigate to the Puzzle page
    Then I should see the Puzzle game title
    And I should see the game instructions
    And I should see the puzzle pieces
    And I should see the reset button

  Scenario: Starting a new game
    Given I am on the Puzzle game page
    When I click the "New Game" button
    Then the puzzle pieces should be shuffled
    And the puzzle area should be reset

  Scenario: Moving a puzzle piece
    Given I am on the Puzzle game page
    And a new game has started
    When I click on a movable puzzle piece
    Then the piece should move to the empty space
    And the puzzle area should be updated

  Scenario: Completing the puzzle
    Given I am on the Puzzle game page
    And a new game has started
    And I have arranged all the pieces correctly
    When I move the final piece to the correct position
    Then I should see a "You Win!" message
    And the puzzle area should be disabled

  Scenario: Resetting the puzzle
    Given I am on the Puzzle game page
    And a new game has started
    When I click the "Reset" button
    Then the puzzle pieces should be reset to the initial state
    And the puzzle area should be updated