Feature: Profile
  As a cat owner
  I want to see my name on the screen
  So that I know that I am looking at my account

  Scenario: View profile
    Given component has mounted for "Mary"
    Then I see my username "Mary" displayed
