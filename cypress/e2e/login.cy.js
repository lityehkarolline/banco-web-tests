describe('Login', () => {
  it('Login com dados válidos deve permitir entrada no sistema', () => {
    // Arrange preparação para o teste
    cy.visit('http://localhost:4000')

    // Act ações realizadas no teste
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.get('#login-section > .btn').click()

    // Assert acerssões = checagem 
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
    
  })
})