import 'cypress-file-upload'

class ContatoPage {
  visit() {
    cy.visit('/index.html')
  }

  preencherNome(nome, sobrenome) {
    cy.get('#firstName').type(nome)
    cy.get('#lastName').type(sobrenome)
  }

  preencherEmail(email) {
    cy.get('#email').type(email)
  }

  preencherTelefone(telefone) {
    cy.get('#phone').type(telefone)
  }

  selecionarProduto(produto) {
    cy.get('#product').select(produto)
  }

  selecionarAtendimento(tipo) {
    cy.xpath(`//input[@name="atendimento-tat" and @value="${tipo}"]`).check()
  }

  marcarEmailCheckbox() {
    cy.get('#email-checkbox').check()
  }

  preencherMensagem(mensagem) {
    cy.get('#open-text-area').type(mensagem)
  }

  enviar() {
    cy.xpath('//button[contains(text(),"Enviar")]').click()
  }

  validarSucesso() {
    cy.xpath('//*[contains(text(),"Mensagem enviada com sucesso.")]').should('be.visible')
  }

  validarErroObrigatorios() {
    cy.xpath('//*[contains(text(),"Valide os campos obrigatórios!")]').should('be.visible')
  }

  anexarDocumento(caminhoArquivo) {
    cy.get('#file-upload').attachFile(caminhoArquivo)
  }

}

export default new ContatoPage()
