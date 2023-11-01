/**
 * cypress/e2e/signup/signup.cy.ts
 */
//import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('I am on the signup page', () => {
  cy.visit('/signup');
});

When('I fill the signup form with valid data', () => {
  cy.get('input[name="username"]').type('newuser');
  cy.get('input[name="password"]').type('password123');
  cy.get('input[name="email"]').type('newuser@example.com');
});

When('I submit the form', () => {
  cy.get('form#signup-form').submit();
});

Then('I should be redirected to the dashboard', () => {
  cy.url().should('include', '/dashboard');
});

When('I fill the signup form with an invalid email format', () => {
  cy.get('input[name="username"]').type('newuser');
  cy.get('input[name="password"]').type('password123');
  cy.get('input[name="email"]').type('invalidemail');
});

Then('I should see an email format error message', () => {
  cy.contains('Invalid email format').should('exist');
});

When('I fill the signup form with a short password', () => {
  cy.get('input[name="username"]').type('newuser');
  cy.get('input[name="password"]').type('short');
  cy.get('input[name="email"]').type('newuser@example.com');
});

Then('I should see a password length error message', () => {
  cy.contains('Password is too short').should('exist');
});

When('I submit the form without filling', () => {
  cy.get('form#signup-form').submit();
});

Then('I should see form validation errors', () => {
  cy.contains('This field is required').should('exist');
});

When('I fill the signup form with special characters or scripts', () => {
  cy.get('input[name="username"]').type('<script>alert("test")</script>');
  cy.get('input[name="password"]').type('<script>alert("test")</script>');
  cy.get('input[name="email"]').type('<script>alert("test")</script>');
});

Then('the application should handle it safely', () => {
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