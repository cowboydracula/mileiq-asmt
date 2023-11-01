Feature: signup
  Description: XXXX is '0000' to '9999'
  Scenario: MileIQ Signup - Success - New Username
    Given I visit the home page
    When yada yada yada
    Then I see "Welcome" on the page

  Scenario: MileIQ Signup - Success - Existing Username
    Given I am on the signup page
    When I fill the signup form with an existing username
    And I submit the form
    Then I should see an error message

  Scenario: MileIQ Signup - Failure - Invalid Email
    Given I am on the signup page
    When I fill the signup form with an invalid email format
    And I submit the form
    Then I should see an email format error message

  Scenario: MileIQ Signup - Failure - Short Password
    Given I am on the signup page
    When I fill the signup form with a short password
    And I submit the form
    Then I should see a password length error message

  Scenario: MileIQ Signup - Failure - Empty Form
    Given I am on the signup page
    When I submit the form without filling
    Then I should see form validation errors

  Scenario: MileIQ Signup - Failure - Spec.Chars. and/or Scripts
    Given I am on the signup page
    When I fill the signup form with special characters or scripts
    And I submit the form
    Then the application should handle it safely

    Examples:
      | firstName | lastName | emailAdd            | orgName  | phoneNum | geoLoc    | employeeCount  | setPass          | verifyPass       | mktgCheck                 | tncCheck |
      | Test-XXXX | XXXX     | Test-XXXX@gmail.com | Org-XXXX | XXX1234  | random_dd | random_dd_1-10 | ObdTest1234!XXXX | ObdTest1234!XXXX | complementarity_TF_condit | true     |