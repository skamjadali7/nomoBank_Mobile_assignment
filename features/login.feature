Feature: myApp Demo Login

  Background: Login page view
    Given I click to menu for login
    Then I click Login option

  Scenario: Success Login
    Then I enter username 'test'
    And I enter password 'test'
    When I click submit button
    Then I verify success login

  Scenario: Error validation on username
    Then I enter username ''
    And I enter password 'test'
    When I click submit button
    Then I verify username error message

  Scenario: Error validation on password
    Then I enter username 'test'
    And I enter password ''
    When I click submit button
    Then I verify password error message
