Cypress.Commands.add('fazerLoginComCredenciaisValidas', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    })

    //cy.get('#login-section > .btn').click()
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('fazerLoginComCredenciaisInvalidas', () => {
     cy.fixture('credenciais').then(credenciais => {
        cy.get('#username').click().type(credenciais.invalida.usuario)
        cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    
    //cy.get('#login-section > .btn').click()
    cy.contains('button', 'Entrar').click()

})