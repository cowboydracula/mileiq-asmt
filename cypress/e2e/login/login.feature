Feature: login
  Scenario: MileIQ Login - Success - Valid Creds
    Given I am on the login page
    When I fill the login form with valid credentials
    And I submit the form
    Then I should be redirected to the dashboard

  Scenario: MileIQ Login - Failure - Invalid Creds
    Given I am on the login page
    When I fill the login form with invalid credentials
    And I submit the form
    Then I should see an error message

  Scenario: MileIQ Login - Failure - Username DNE
    Given I am on the login page
    When I fill the login form with a non-existing username
    And I submit the form
    Then I should see an invalid credentials message

  Scenario: MileIQ Login - Failure - Empty Form
    Given I am on the login page
    When I submit the login form without filling
    Then I should see form validation errors

  Scenario: MileIQ Login - Long Username and/or Password
    Given I am on the login page
    When I fill the login form with an extremely long username or password
    And I submit the form
    Then the application should handle it safely