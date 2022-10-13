import { password } from './secret.js';

describe('User Login', () => {
  it('should a visitor to login', () => {
    cy.visit('https://dribbble.com/');

    cy.get('[data-site-nav-element="Sign in"]').click();

    cy.location('pathname').should('eq', '/session/new');

    cy.get('[name="login"]').type('svetlana-data');

    cy.get('[name="password"]').type(password);

    cy.get('[type="submit"]').click();
  });
});
