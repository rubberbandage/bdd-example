Feature: Main
  In order to keep track of how many cats I have
  As a cat owner
  I want to increment my cat counter

  Background:
    Given I open the home page

    @skip
  Scenario: Count cats
    When I click on "Increment"
    Then I see the number 1

      @skip
  Scenario: Forgot to enter password
    Given I have logged in with "dog@owner" and "DOGS_RULE"
    Then I see the text "Bad Kitty"

        @skip
  Scenario: Log in to Kitty Counter
    When I type "username" into the "Username" field
    And I type "password" into the "Password" field
#    And I click on "Show Cats"
#    Then I see 3 cats

  Scenario: Log in to Kitty Counter
    Given I have logged in
    When I click on "Show Cats"
    Then I see 3 cats
    And I see my cats
      | name     | breed    |
      | Whiskers | Bengal   |
      | Mittens  | Siberian |
      | Savage   | Savannah |