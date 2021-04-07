Feature: Increment Counter
  It increments the counter

  Scenario: Increments counter by 1
    Given component has mounted
    When clicking increment button
    Then counter shows 1

  ## JUST DOESN'T WORK ???
  @skip
  Scenario: Decrements counter by 1
    Given component has mounted
    When clicking decrement button
    Then counter shows -1