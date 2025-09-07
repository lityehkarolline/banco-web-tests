describe('Login', () => {
  beforeEach(() => {
    // Arrange preparação para o teste
    //cy.visit('http://localhost:4000')
    cy.visit('/')
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    // Act ações realizadas no teste
    cy.fazerLoginComCredenciaisValidas()

    // Assert acerssões = checagem 
    cy.contains('h4', 'Realizar Transferência').should('be.visible')

  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    // Arrange preparação para o teste
    //cy.visit('http://localhost:4000')

    // Act ações realizadas no teste
    cy.fazerLoginComCredenciaisInvalidas()

    // Assert acerssões = checagem 
    //cy.contains('h4', 'Realizar Transferência').should('be.visible')
    //cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  })

})