import scrollUntilEnd from './scrollUnilEnd';

describe('Blog spec', () => {
  it('should open Blog in browser', () => {
    cy.visit('http://localhost:3000/posts');
  });

  beforeEach(() => {
    cy.visit('http://localhost:3000/posts');
  });

  it('should display all the elements of Blog Page', () => {
    scrollUntilEnd();

    cy.get('[data-cy=header]').should('be.visible');
    cy.get('[data-cy=blog-header]').should('be.visible');
    cy.get('[data-cy=blog-posts]').should('be.visible');
    cy.get('[data-cy=footer]').should('be.visible');
  });

  it('should redirect to Post 1 page clicking "Read More" button on header section', () => {
    cy.get('[data-cy=blog-header-button]').click();
    cy.url().should('include', '/posts/1');
  });

  it('should redirect to Post page clicking post title', () => {
    scrollUntilEnd();
    cy.get('[data-cy=blog-post-title-1]').click();
    cy.url().should('include', '/posts/1');
  });

  it('should show only 5 posts on the page', () => {
    scrollUntilEnd();
    for (let i = 1; i <= 5; i += 1) {
      cy.get(`[data-cy=blog-post-${i}]`).should('be.visible');
    }
  });

  it('should show 5 another posts on the page after click "Next"', () => {
    scrollUntilEnd();
    cy.get('[data-cy=blog-prev]').should('be.disabled');
    cy.get('[data-cy=blog-next]').click();
    for (let i = 6; i <= 10; i += 1) {
      cy.get(`[data-cy=blog-post-${i}]`).should('be.visible');
    }
  });

  it('should show 5 first posts on the page after click "Prev"', () => {
    scrollUntilEnd();
    cy.get('[data-cy=blog-next]').click();
    cy.get('[data-cy=blog-next]').should('be.disabled');
    cy.get('[data-cy=blog-prev]').click();
    for (let i = 1; i <= 5; i += 1) {
      cy.get(`[data-cy=blog-post-${i}]`).should('be.visible');
    }
  });

  it('should redirect to Category page clicking on category card', () => {
    scrollUntilEnd();
    cy.get('[data-cy=home-choose-category-card]').first().click();
    cy.url().should('include', '/category');
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
