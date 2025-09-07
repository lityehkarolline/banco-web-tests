describe('Login', () => {
  beforeEach(() => {
    // Arrange preparação para o teste
    //cy.visit('http://localhost:4000')
    cy.visit(Cypress.env('URL'))
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    // Arrange preparação para o teste
    //cy.visit('http://localhost:4000')

    // Act ações realizadas no teste
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    })

    //cy.get('#login-section > .btn').click()
    cy.contains('button', 'Entrar').click()

    // Assert acerssões = checagem 
    cy.contains('h4', 'Realizar Transferência').should('be.visible')

  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    // Arrange preparação para o teste
    //cy.visit('http://localhost:4000')

    // Act ações realizadas no teste
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.invalida.usuario)
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    
    //cy.get('#login-section > .btn').click()
    cy.contains('button', 'Entrar').click()

    // Assert acerssões = checagem 
    //cy.contains('h4', 'Realizar Transferência').should('be.visible')
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')

  })

})