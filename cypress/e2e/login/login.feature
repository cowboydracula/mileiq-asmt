Feature: login
  Scenario: MileIQ Login - Success - Valid Creds
    Given the user is on the login page
    When the user fill the login form with valid credentials
    And the user submits the form
    Then the user should be redirected to the dashboard

  Scenario: MileIQ Login - Failure - Invalid Creds
    Given the user is on the login page
    When the user fill the login form with invalid credentials
    And the user submits the form
    Then the user should see an error message

  Scenario: MileIQ Login - Failure - Username DNE
    Given the user is on the login page
    When the user fill the login form with a non-existing username
    And the user submits the form
    Then the user should see an invalid credentials message

  Scenario: MileIQ Login - Failure - Empty Form
    Given the user is on the login page
    When the user submits the login form without filling
    Then the user should see form validation errors

  Scenario: MileIQ Login - Long Username and/or Password
    Given the user is on the login page
    When the user fill the login form with an extremely long username or password
    And the user submits the form
    Then the application should handle it safely