import scrollUntilEnd from './scrollUnilEnd';

describe('Category test', () => {
  it('should open Category in browser', () => {
    cy.visit('http://localhost:3000/category/startup');
  });

  beforeEach(() => {
    cy.visit('http://localhost:3000/category/startup');
  });

  it('should display all the elements of Category Startup Page', () => {
    scrollUntilEnd();

    cy.get('[data-cy=header]').should('be.visible');
    cy.get('[data-cy=category-header]').should('be.visible');
    cy.get('[data-cy=category-posts]').should('be.visible');
    cy.get('[data-cy=category-aside]').should('be.visible');
    cy.get('[data-cy=footer]').should('be.visible');
  });

  it('should properly display all elements of aside panel', () => {
    cy.get('[data-cy=category-searchbar]').should('be.visible');
    cy.get('[data-cy=category-name]').should('be.visible');
    cy.get('[data-cy=category-tag]').should('have.length', 8);

    cy.get('[data-cy=blog-post-1]').should('be.visible');
    cy.get('[data-cy=blog-post-3]').should('be.visible');
    cy.get('[data-cy=blog-post-7]').should('be.visible');
  });

  it('should redirect to business page after choosing business category', () => {
    cy.get('[data-cy=category-name-business]').click();

    cy.get('[data-cy=blog-post-2]').should('be.visible');
    cy.get('[data-cy=blog-post-8]').should('be.visible');

    cy.url().should('include', '/business');
  });

  it('should display 3 posts when we type "a" in searchbar', () => {
    cy.get('[data-cy=category-searchbar]').type('a');

    cy.get('[data-cy=searched-post-1]').should('be.visible');
    cy.get('[data-cy=searched-post-3]').should('be.visible');
    cy.get('[data-cy=searched-post-7]').should('be.visible');
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
