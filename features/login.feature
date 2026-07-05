
@login
Feature: Login

  @smoke
  Scenario Outline: Login validation
    When User logs in as "<userType>"
    Then Login result should be "<expected>"

    # title-format: <caseName>
    Examples:
      | caseName           | userType    | expected |
      | Valid User Login   | validUser   | success  |
      | Locked User Login  | lockedUser  | error    |
      | Invalid User Login | invalidUser | error    |
      |Checking wrong user| checking wrong user | error    |