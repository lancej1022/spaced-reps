import 'cypress-axe';

describe('Questions List', () => {
  it('passes a11y check on initial load', () => {
    cy.checkA11y();
  });

  it("can narrow down the list of questions based on a user's search term", () => {
    cy.findByLabelText(/search/i).type('Pair with targ');
    cy.findByRole('heading', { name: /Pair with target sum/i }).should('exist');
  });
});
