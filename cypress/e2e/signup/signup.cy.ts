/**
 * cypress/e2e/signup/signup.cy.ts
 * Gherkin (Cucumber BDD) syntax at the bottom of this file
 */

import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('the user is on the signup page', () => {
  cy.visit('/signup');
});

When('the user fills the signup form with valid data', () => {
  cy.get('input[name="username"]').type('newuser');
  cy.get('input[name="password"]').type('password123');
  cy.get('input[name="email"]').type('newuser@example.com');
});

When('the user submits the form', () => {
  cy.get('form#signup-form').submit();
});

Then('the user should be redirected to the dashboard', () => {
  cy.url().should('include', '/dashboard');
});

When('the user fills the signup form with an invalid email format', () => {
  cy.get('input[name="username"]').type('newuser');
  cy.get('input[name="password"]').type('password123');
  cy.get('input[name="email"]').type('invalidemail');
});

Then('the user should see an email format error message', () => {
  cy.contains('Invalid email format').should('exist');
});

When('the user fills the signup form with an invalid password', () => {
  cy.get('input[name="username"]').type('newuser');
  cy.get('input[name="password"]').type('short');
  cy.get('input[name="email"]').type('newuser@example.com');
});

Then('the user should see a password length error message', () => {
  cy.contains('Password is too short').should('exist');
});

When('the user submits the form with empty input fields', () => {
  cy.get('form#signup-form').submit();
});

Then('the user should see form validation errors', () => {
  cy.contains('This field is required').should('exist');
});

When('the user fills the signup form with special characters and/or scripts', () => {
  cy.get('input[name="username"]').type('<script>alert("test")</script>');
  cy.get('input[name="password"]').type('<script>alert("test")</script>');
  cy.get('input[name="email"]').type('<script>alert("test")</script>');
});

Then('special characters and/or scripts are handled appropriately', () => {
  cy.get('form#signup-form').submit();
  cy.on('window:alert', (text) => {
    expect(text).to.not.equal('test');
  });
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