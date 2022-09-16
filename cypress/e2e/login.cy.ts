describe('Login Page', () => {
  it('Should not proceed if the form is invalid', () => {
    cy.visit('/login');
    cy.url().should('includes', 'login');
    cy.get('[formControlName="email"]').type('Efrain_Lang@gmail.com');
    cy.get('[formControlName="password"]').type('12345678');
    cy.get('.cyp-btn').click();
  })
})
