import scrollUntilEnd from './scrollUnilEnd';

describe('Home test', () => {
  it('should open Home in browser', () => {
    cy.visit('http://localhost:3000');
  });

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should display all the elements of Home Page', () => {
    scrollUntilEnd();

    cy.get('[data-cy=header]').should('be.visible');
    cy.get('[data-cy=home-hero]').should('be.visible');
    cy.get('[data-cy=home-posts]').should('be.visible');
    cy.get('[data-cy=home-about]').should('be.visible');
    cy.get('[data-cy=home-category]').should('be.visible');
    cy.get('[data-cy=home-special-post]').should('be.visible');
    cy.get('[data-cy=list-of-authors]').should('be.visible');
    cy.get('[data-cy=home-special-post]').should('be.visible');
    cy.get('[data-cy=home-logotips]').should('be.visible');
    cy.get('[data-cy=home-testimonials]').should('be.visible');
    cy.get('[data-cy=join-team]').should('be.visible');
    cy.get('[data-cy=footer]').should('be.visible');
  });

  it('should redirect to Blog page clicking "Read More" button on hero section', () => {
    cy.get('[data-cy=home-hero-button]').click();
    cy.url().should('include', '/posts');
  });

  it('should change language to russian and english', () => {
    cy.get('[data-cy=locale-ru]').click();
    cy.url().should('include', '/ru');

    cy.get('[data-cy=locale-en]').click();
    cy.url().should('include', '/en');
  });

  it('should redirect to Post 1 page clicking on post', () => {
    cy.scrollTo('bottom');
    cy.get('[data-cy=home-post-card-link]').first().click();
    cy.url().should('include', '/posts/1');
  });

  it('should redirect to Category page clicking on category card', () => {
    scrollUntilEnd();
    cy.get('[data-cy=home-choose-category-card]').first().click();
    cy.url().should('include', '/category');
  });

  it('should redirect to About page clicking on "Discover our story" button', () => {
    scrollUntilEnd();
    cy.get('[data-cy=home-about-link]').click();
    cy.url().should('include', '/about');
  });

  it('should redirect to Author page clicking on author card name', () => {
    scrollUntilEnd();
    cy.get('[data-cy=home-author-card]').first().click();
    cy.url().should('include', '/authors/1');
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
