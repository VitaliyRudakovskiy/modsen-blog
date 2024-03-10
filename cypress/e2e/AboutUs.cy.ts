import scrollUntilEnd from './scrollUnilEnd';

describe('About us test', () => {
  it('should open About us in browser', () => {
    cy.visit('http://localhost:3000/about');
  });

  beforeEach(() => {
    cy.visit('http://localhost:3000/about');
  });

  it('should display all the elements of About Us Page', () => {
    scrollUntilEnd();

    cy.get('[data-cy=header]').should('be.visible');
    cy.get('[data-cy=about-header]').should('be.visible');
    cy.get('[data-cy=about-overview]').should('be.visible');
    cy.get('[data-cy=about-mission]').should('be.visible');
    cy.get('[data-cy=about-team]').should('be.visible');
    cy.get('[data-cy=about-why]').should('be.visible');
    cy.get('[data-cy=list-of-authors]').should('be.visible');
    cy.get('[data-cy=join-team]').should('be.visible');
    cy.get('[data-cy=footer]').should('be.visible');
  });

  it('should redirect to Author page clicking on author card name', () => {
    scrollUntilEnd();
    cy.get('[data-cy=home-author-card]').first().click();
    cy.url().should('include', '/authors/1');
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
