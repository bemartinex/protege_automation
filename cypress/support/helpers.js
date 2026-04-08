import ContatoPage from '../support/pages/contatoPage'

export function preencherFormulario(dados) {
  ContatoPage.preencherNome(dados.nome, dados.sobrenome)
  ContatoPage.preencherEmail(dados.email)
  ContatoPage.preencherTelefone(dados.telefone)
  ContatoPage.selecionarProduto(dados.produto)
  ContatoPage.selecionarAtendimento('elogio')
  ContatoPage.marcarEmailCheckbox()
  ContatoPage.preencherMensagem(dados.mensagem)
}
