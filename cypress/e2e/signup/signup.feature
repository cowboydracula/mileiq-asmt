Feature: signup
  Scenario Outline: MileIQ Signup - Success - New Username
      """Description: XXXX is 0000 to 9999"""
    Given the user visits the landing page
    When the user enters a valid "uName" and "pWord"
    Then the usersee "Welcome" on the page

  Scenario Outline: MileIQ Signup - Success - Existing Username
    Given the user is on the signup page
    When the userfill the signup form with an existing username
    And the usersubmit the form
    Then the usershould see an error message

  Scenario Outline: MileIQ Signup - Failure - Invalid Email
    Given the user is on the signup page
    When the userfill the signup form with an invalid email format
    And the usersubmit the form
    Then the usershould see an email format error message

  Scenario Outline: MileIQ Signup - Failure - Invalid Password
    Given the user is on the signup page
    When the userfill the signup form with a short password
    And the usersubmit the form
    Then the usershould see a password length error message

  Scenario Outline: MileIQ Signup - Failure - Empty Form
    Given the user is on the signup page
    When the usersubmit the form without filling
    Then the usershould see form validation errors

  Scenario Outline: MileIQ Signup - Failure - SpecChars and/or Scripts
    Given the user is on the signup page
    When the user fill the signup form with special characters or scripts
      | firstName | lastName | emailAdd | orgName | phoneNum | geoLoc | employeeCount | setPass | verifyPass |
      | regex     | regex    | regex    | regex   | regex    | regex  | regex         | regex   | regex      |
    And the user submits the form
    Then the application should handle it safely

    Examples:
      | firstName | lastName | emailAdd            | orgName  | phoneNum | geoLoc    | employeeCount  | setPass          | verifyPass       | mktgCheck                 | tncCheck |
      | Test-XXXX | XXXX     | Test-XXXX@gmail.com | Org-XXXX | XXX1234  | random_dd | random_dd_1-10 | ObdTest1234!XXXX | ObdTest1234!XXXX | complementarity_TF_condit | true     |