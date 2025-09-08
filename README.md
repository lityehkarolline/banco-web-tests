# banco-web-tests

Projeto de testes automatizados com Cypress e JavaScript, criado para demonstrar aos alunos da Mentoria 2.0 como estruturar e automatizar testes end-to-end em aplicações web.

## Objetivo

Este projeto tem como objetivo ensinar, na prática, como automatizar testes de interface utilizando Cypress, organizando o código com Custom Commands e gerando relatórios detalhados com cypress-mochawesome-reporter.

## Componentes do Projeto

- **Cypress**: Framework para automação de testes end-to-end.
- **Custom Commands**: Comandos personalizados para facilitar e organizar a automação.
- **cypress-mochawesome-reporter**: Geração de relatórios em HTML dos testes executados.
- **Fixtures**: Dados mockados para cenários de teste.
- **Testes E2E**: Scripts que validam login e transferência bancária.

## Pré-requisitos

- Node.js instalado
- [banco-api](https://github.com/juliodelimas/banco-api) em execução
- [banco-web](https://github.com/juliodelimas/banco-web) em execução

## Instalação

```sh
git clone https://github.com/lityehkarolline/banco-web-tests.git
cd banco-web-tests
npm install
```

## Execução dos Testes

- Para rodar os testes em modo headless:
  ```sh
  npm test
  ```
- Para abrir o Cypress em modo interativo:
  ```sh
  npm run cy:open
  ```
- Para rodar os testes com interface (headed):
  ```sh
  npm run cy:headed
  ```

## Relatórios

Os relatórios em HTML são gerados em `cypress/reports/html/index.html`.

## Estrutura dos Testes

- **Login**: Testes de login com credenciais válidas e inválidas.
- **Transferência**: Testes de transferência entre contas, incluindo validação de saldo e autenticação.

Os arquivos de teste estão em:
- `cypress/e2e/login.cy.js`
- `cypress/e2e/transferencia.cy.js`

## Custom Commands

Os comandos personalizados estão organizados em `cypress/support/commands/`:

- `common.js`
  - `verificarMensagemNoToast`: Valida mensagens exibidas em toast.
  - `selecionarOpcaoNaCombobox`: Seleciona opções em comboboxes.
- `login.js`
  - `fazerLoginComCredenciaisValidas`: Realiza login com dados válidos.
  - `fazerLoginComCredenciaisInvalidas`: Realiza login com dados inválidos.
- `transferencia.js`
  - `realizarTransferencia`: Executa o fluxo de transferência entre contas.

## Dados de Teste (Fixtures)

- `cypress/fixtures/credenciais.json`: Dados de login válidos e inválidos.
- `cypress/fixtures/example.json`: Exemplo de dados mockados.

---

Sinta-se à vontade para contribuir ou adaptar este projeto para atender às suas necessidades.