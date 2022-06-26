import 'cypress-axe';

describe('empty spec', () => {
  it('passes a11y check on initial render', () => {
    cy.checkA11y();
  });
});
