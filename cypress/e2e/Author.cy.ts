import scrollUntilEnd from './scrollUnilEnd';

describe('Author spec', () => {
  it('should open Author in browser', () => {
    cy.visit('http://localhost:3000/authors/1');
  });

  beforeEach(() => {
    cy.visit('http://localhost:3000/authors/1');
  });

  it('should display all the elements of Author Page', () => {
    scrollUntilEnd();

    cy.get('[data-cy=header]').should('be.visible');
    cy.get('[data-cy=author-header]').should('be.visible');
    cy.get('[data-cy=author-posts]').should('be.visible');
    cy.get('[data-cy=footer]').should('be.visible');
  });

  it('should display 2 posts of Floyd Miles', () => {
    scrollUntilEnd();

    cy.get('[data-cy=author-post]').should('have.length', 2);
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
