import scrollUntilEnd from './scrollUnilEnd';

describe('Post test', () => {
  it('should open Post 1 in browser', () => {
    cy.visit('http://localhost:3000/posts/1');
  });

  beforeEach(() => {
    cy.visit('http://localhost:3000/posts/1');
  });

  it('should display all the elements of Post Page', () => {
    scrollUntilEnd();

    cy.get('[data-cy=header]').should('be.visible');
    cy.get('[data-cy=post-header]').should('be.visible');
    cy.get('[data-cy=post-content]').should('be.visible');
    cy.get('[data-cy=post-read-next]').should('be.visible');
    cy.get('[data-cy=join-team]').should('be.visible');
    cy.get('[data-cy=footer]').should('be.visible');
  });

  it('should show only 3 extra posts at read more section', () => {
    scrollUntilEnd();
    cy.get('[data-cy=extra-post').should('have.length', 3);
  });

  it('should redirect to another post page clicling on the title of extra post', () => {
    scrollUntilEnd();
    cy.get('[data-cy=extra-post-3').click();
    cy.url().should('include', '/posts/3');
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
