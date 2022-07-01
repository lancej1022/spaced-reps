import 'cypress-axe';

function loadSaveReminderForm() {
  return cy.findByRole('link', { name: /save reminder/i }).click();
}

describe('SaveReminderForm', () => {
  it('passes a11y check on initial load', () => {
    loadSaveReminderForm();
    cy.checkA11y();
  });

  it('has a number input, select, text area, save button, and return button', () => {
    loadSaveReminderForm();
    cy.findByLabelText(/Number of days until next attempt/i).should('exist');
    cy.findByLabelText(/categorize this problem/i).should('exist');
    cy.findByLabelText(/save any notes about this algo/i).should('exist');
    cy.findByRole('button', { name: /save/i }).should('exist');
    cy.findByRole('link', { name: /return to questions/i }).should('exist');
  });

  it('returns the user to the main question list view when the return button is clicked', () => {
    loadSaveReminderForm();
    cy.findByRole('link', { name: /return to questions/i }).click();
    cy.findByLabelText(/search/i).should('exist');
  });

  // TODO: this test is close to done but the chrome API needs to be mocked
  // it("saves the user's reminder when the save button is clicked", () => {
  //   loadSaveReminderForm();

  //   cy.findByLabelText(/Number of days until next attempt/i).type('5');
  //   cy.findByRole('option', { name: /two pointers/i }).type('two pointers');
  //   cy.findByLabelText(/save any notes about this algo/i).type('super cool notes oh wow');
  //   cy.findByRole('button', { name: /save/i }).click();
  //   TODO: look up the corresponding question card
  // });
});
