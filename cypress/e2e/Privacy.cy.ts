describe('Privacy spec', () => {
  it('should open Privacy Policy in browser', () => {
    cy.visit('http://localhost:3000/privacy');
  });

  beforeEach(() => {
    cy.visit('http://localhost:3000/privacy');
  });

  it('should display all the elements of Privacy Policy Page', () => {
    cy.get('[data-cy=header]').should('be.visible');
    cy.get('[data-cy=privacy-header]').should('be.visible');
    cy.get('[data-cy=privacy-content]').should('be.visible');
    cy.get('[data-cy=footer]').should('be.visible');
  });

  it('should change language to russian and english', () => {
    cy.get('[data-cy=locale-ru]').click();
    cy.url().should('include', '/ru');

    cy.get('[data-cy=locale-en]').click();
    cy.url().should('include', '/en');
  });

  it('should properly handle subscribe button behaviour', () => {
    const input = cy.get('[data-cy=footer-input]');
    const button = cy.get('[data-cy=footer-subscribe-button]');

    button.should('be.disabled');
    input.type('testemail@gmail.com');
    button.click();
    cy.wait(3000);
    input.should('have.value', '');
  });
});
