/**
 * cypress/e2e/login/login.cy.ts
 */

import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('I am on the login page', () => {
  cy.visit('/login');
});

When('I fill the login form with valid credentials', () => {
  cy.get('input[name="username"]').type('validuser');
  cy.get('input[name="password"]').type('validpassword');
});

When('I submit the form', () => {
  cy.get('form#login-form').submit();
});

Then('I should be redirected to the dashboard', () => {
  cy.url().should('include', '/dashboard');
});

When('I fill the login form with a non-existing username', () => {
  cy.get('input[name="username"]').type('nonexistinguser');
  cy.get('input[name="password"]').type('password');
});

Then('I should see an invalid credentials message', () => {
  cy.contains('Invalid credentials').should('exist');
});

When('I submit the login form without filling', () => {
  cy.get('form#login-form').submit();
});

When('I fill the login form with an extremely long username or password', () => {
  cy.get('input[name="username"]').type('a'.repeat(1000));
  cy.get('input[name="password"]').type('a'.repeat(1000));
});

Then('the application should handle it safely', () => {
  cy.get('form#login-form').submit();
  cy.get('body').should('not.contain', 'Internal Server Error');
});

// Gherkin (Cucumber BDD) syntax for copy/cut & pasting step definitions template
/*
Given('', () => {
  //
})

When('', () => {
    //
  })

Then('', () => {
  //
})
*/