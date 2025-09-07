describe('Transferencias', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()

    })


    it('Deve transferir quando informo dados e valor validos', () => {
        // Act
        cy.realizarTransferencia('Maria Oliveira', 'João da Silva', '10')

        //Assert
        cy.verificarMensagemNoToast('Transferência realizada!')
    })

    it('Deve apresentar erro quando tentar transferir mais que 5 mil sem o token', () => {
        // Act
        cy.realizarTransferencia('João da Silva', 'Maria Oliveira', '6000')

        //Assert
        cy.verificarMensagemNoToast('Saldo insuficiente para realizar a transferência.')
        //Autenticação necessária para transferências acima de R$5.000,00.
    })

})