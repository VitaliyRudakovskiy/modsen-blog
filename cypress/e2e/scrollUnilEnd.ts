const scrollUntilEnd = () => {
  cy.document().then((doc) => {
    const { scrollTop } = doc.documentElement;
    cy.scrollTo('bottom');
    cy.wait(500);
    cy.document().then((doc2) => {
      if (doc2.documentElement.scrollTop > scrollTop) {
        scrollUntilEnd();
      }
    });
  });
};

export default scrollUntilEnd;
