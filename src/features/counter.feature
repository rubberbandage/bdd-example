Feature: Counter
  It increments and decrements the counter

  Scenario: Increments counter by 1
    Given component has mounted
    When I click increment
    Then counter shows 1

#  @skip
  Scenario Outline: Decrements counter by 1
    Given component has mounted with <initial>
    When I click decrement
    Then counter shows <expectedValue>

    Examples:
      | initial | expectedValue |
      | 0       | -1            |
