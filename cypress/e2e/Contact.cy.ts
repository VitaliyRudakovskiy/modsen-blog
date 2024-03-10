import scrollUntilEnd from './scrollUnilEnd';

describe('Contact test', () => {
  it('should open Contact Page in browser', () => {
    cy.visit('http://localhost:3000/contact');
  });

  beforeEach(() => {
    cy.visit('http://localhost:3000/contact');
  });

  it('should display all the elements of Contact Page', () => {
    scrollUntilEnd();

    cy.get('[data-cy=header]').should('be.visible');
    cy.get('[data-cy=contact-header]').should('be.visible');
    cy.get('[data-cy=contact-info]').should('be.visible');
    cy.get('[data-cy=contact-form]').should('be.visible');
    cy.get('[data-cy=contact-map]').should('be.visible');
    cy.get('[data-cy=footer]').should('be.visible');
  });

  it('should validate and send form data', () => {
    scrollUntilEnd();

    cy.get('[data-cy=contact-form-input-name]').type('1');
    cy.get('[data-cy=contact-form-input-email]').type('errorror@mailru');
    cy.get('textarea').type('Very short');

    cy.get('[data-cy=contact-form-error]').should('have.length', 3);

    cy.get('[data-cy=contact-form-input-name]').clear();
    cy.get('[data-cy=contact-form-input-email]').clear();
    cy.get('textarea').clear();

    cy.get('[data-cy=contact-form-input-name]').type('Valid Test Name');
    cy.get('[data-cy=contact-form-input-email]').type('testEmail@gmail.com');
    cy.get('textarea').type('The problem is about valid messages');

    cy.get('textarea')
      .closest('form')
      .within(() => {
        cy.get('button[type=submit]').click();
      });

    cy.wait(2000);

    cy.get('[data-cy=contact-form-success]').should('exist');
  });

  it('should change language to russian and english', () => {
    cy.get('[data-cy=locale-ru]').click();
    cy.url().should('include', '/ru');

    cy.get('[data-cy=locale-en]').click();
    cy.url().should('include', '/en');
  });

  it('should properly handle subscribe button behaviour', () => {
    scrollUntilEnd();

    const input = cy.get('[data-cy=footer-input]');
    const button = cy.get('[data-cy=footer-subscribe-button]');

    button.should('be.disabled');
    input.type('testemail@gmail.com');
    button.click();
    cy.wait(3000);
    input.should('have.value', '');
  });
});
