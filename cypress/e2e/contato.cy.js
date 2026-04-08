import ContatoPage from '../support/pages/contatoPage'
import { preencherFormulario } from '../support/helpers'
import dados from '../fixtures/contato.json' 

describe('Formulario de Contato', () => {

    beforeEach(() => {
    ContatoPage.visit()
    })

    it('Deve enviar mensagem com sucesso sem anexo', () => {
    preencherFormulario(dados.formulario)
    ContatoPage.enviar()
    cy.contains(dados.formulario.assertSucesso).should('be.visible')
    })

    it('Deve enviar mensagem com sucesso com anexo', () => {
    preencherFormulario(dados.formulario)
    ContatoPage.anexarDocumento('message.txt')
    ContatoPage.enviar()
    cy.contains(dados.formulario.assertSucesso).should('be.visible')
    })

    it('Deve exibir erro ao faltar campos obrigatórios', () => {
    const formulario = { ...dados.formulario }
    formulario.nome = ' '
    formulario.sobrenome = ' '
    formulario.email = ' '
    preencherFormulario(formulario)
    ContatoPage.enviar()
    cy.contains(dados.formulario.assertErroObrigatorios).should('be.visible')
    })

    it('Deve exibir erro ao informar email inválido', () => {
    const formulario = { ...dados.formulario }
    formulario.email = 'email_invalido'
    preencherFormulario(formulario)
    ContatoPage.enviar()
    cy.contains(dados.formulario.assertErroObrigatorios).should('be.visible')
    })

    it('Deve enviar mensagem com sucesso sem telefone', () => {
    const formulario = { ...dados.formulario }
    formulario.telefone = ' '
    preencherFormulario(formulario)
    ContatoPage.enviar()
    cy.contains(dados.formulario.assertSucesso).should('be.visible')
    })


})