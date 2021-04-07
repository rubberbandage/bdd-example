Feature: Counter
  In order to keep track of how many cats I have
  As a cat owner
  I want to increment my cat counter

  Background:
    Given I open the home page

  Scenario: Count cats
    # Find by text
    When I click on "Increment"
    Then I see the number 1

    # Find by button with text
    # When I click on the button "Increment"

    # Find by data-automation-id
    # When I increment the counter

  Scenario: Forgot to enter password
    Given I have logged in with "dog@owner" and "DOGS_RULE"
    Then I see the text "Bad Kitty"

  Scenario: Log in to Kitty Counter
    Given I have logged in
    When I click on "Show Cats"
    Then I see 3 cats



# TABLE EXAMPLE
#    And I see my cats
#      | name     | breed    |
#      | Whiskers | Bengal   |
#      | Mittens  | Siberian |
#      | Savage   | Savannah |