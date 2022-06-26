import 'cypress-axe';

describe('empty spec', () => {
  it('passes a11y check on initial render', () => {
    // cy.visit('/popup.html');
    cy.checkA11y();
  });
});
