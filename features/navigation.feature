Feature: Navigating through the app

  Scenario Outline: Navigating to the Home page
    Given I am on the <page> page
    When I navigate to the Home page
    Then I should see the Home page
    Examples:
      | page                |
      | Hangman             |
      | More Or Less        |
      | Puzzle              |
      | Rock Paper Scissors |

  Scenario Outline: Navigating to the Hangman game page
    Given I am on the <page> page
    When I navigate to the Hangman page
    Then I should see the Hangman page
    Examples:
      | page                |
      | Home                |
      | More Or Less        |
      | Puzzle              |
      | Rock Paper Scissors |


  Scenario Outline: Navigating to the More Or Less game page
    Given I am on the <page> page
    When I navigate to the More Or Less page
    Then I should see the More Or Less page
    Examples:
      | page                |
      | Hangman             |
      | Home                |
      | Puzzle              |
      | Rock Paper Scissors |


  Scenario Outline: Navigating to the Puzzle game page
    Given I am on the <page> page
    When I navigate to the Puzzle page
    Then I should see the Puzzle page
    Examples:
      | page                |
      | Hangman             |
      | Home                |
      | More Or Less        |
      | Rock Paper Scissors |

  Scenario Outline: Navigating to the Rock Paper Scissors game page
    Given I am on the <page> page
    When I navigate to the Rock Paper Scissors page
    Then I should see the Rock Paper Scissors page
    Examples:
      | page         |
      | Hangman      |
      | Home         |
      | More Or Less |
      | Puzzle       |
