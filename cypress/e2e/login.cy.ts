describe('Login Page', () => {
  it('Should proceed if the inputs are validated', () => {
    cy.visit('/login');
    cy.url().should('includes', 'login');
    cy.get('[formControlName="email"]').type('Efrain_Lang@gmail.com');
    cy.get('[formControlName="password"]').type('12345678');
    cy.get('.btn').click();
  });

  it('Should NOT proceed if the inputs were invalid', () => {
    cy.visit('/login');
    cy.url().should('includes', 'login');
    cy.get('[formControlName="email"]').type('sample@gmail.com');
    cy.get('[formControlName="password"]').type('123456789');
    //even if clicked, it will not proceed to home page
    cy.get('.btn').click();
  });

})
