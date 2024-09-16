Feature: myApp Demo Login

  Background: Login page view
    Given I click to menu for login
    Then I click Login option

  Scenario Outline: Success Login
    Then I enter username "<username>"
    And I enter password "<password>"
    When I click submit button
    Then I verify success login

    Examples:
      | username | password |
      | test     | test     |

  Scenario Outline: Error validation on username
    Then I enter username "<username>"
    And I enter password "<password>"
    When I click submit button
    Then I verify username error message

    Examples:
      | username | password |
      |          | test     |

  Scenario Outline: Error validation on password
    Then I enter username "<username>"
    And I enter password "<password>"
    When I click submit button
    Then I verify password error message

    Examples:
      | username | password |
      | test     |          |
