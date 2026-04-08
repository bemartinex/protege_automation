## 🤖 Estrutura do Projeto - Protege Automation

## 🛠️ Instalação de Dependências

### **Pré-requisitos**
- **Node.js** versão 14 ou superior
- **npm** (gerenciador de pacotes do Node.js)

### **Passo 1: Clonar ou acessar o repositório**
```bash
cd protege_automation
```

### **Passo 2: Instalar as dependências**
```bash
npm install
```

- **cypress** (^15.13.0): Framework principal de automação E2E
- **cypress-file-upload** (^5.0.8): Plugin para fazer upload de arquivos nos testes
- **cypress-xpath** (^2.0.1): Suporte a XPath nos testes Cypress

---

## ▶️ Executando os Testes

### **Modo Interativo (Interface do Cypress)**
Para executar os testes com a interface visual do Cypress:
```bash
npx cypress open
```

### **Modo Headless (CLI)**
Para executar os testes em background (sem interface visual):
```bash
npx cypress run
```

---

### 📂 Descrição dos Diretórios

| Diretório | Descrição |
|-----------|-----------|
| `cypress/e2e/` | Contém os testes end-to-end (specs) que descrevem os cenários de negócio |
| `cypress/fixtures/` | Armazena dados estáticos (JSON, arquivos) utilizados nos testes |
| `cypress/support/` | Contém helpers, page objects e configurações compartilhadas |

---

## 🎯 Cenários de Testes (BDD)

#### ✅ **Cenário 1: Enviar mensagem com sucesso sem anexo**
```gherkin
Dado que o usuário acessa o formulário de contato
Quando preenche todos os campos obrigatórios:
  - Nome: Breno
  - Sobrenome: Martinez
  - Email: brehmartinez@gmail.com
  - Telefone: 11999999999
  - Produto: YouTube
  - Tipo de Atendimento: Elogio
  - Mensagem: [Mensagem de feedback]
E clica no botão "Enviar"
Então deve exibir a mensagem "Mensagem enviada com sucesso."
```

#### ✅ **Cenário 2: Enviar mensagem com sucesso com anexo**
```gherkin
Dado que o usuário acessa o formulário de contato
Quando preenche todos os campos obrigatórios
E anexa um documento (message.txt)
E clica no botão "Enviar"
Então deve exibir a mensagem "Mensagem enviada com sucesso."
```

#### ✅ **Cenário 3: Exibir erro ao faltar campos obrigatórios**
```gherkin
Dado que o usuário acessa o formulário de contato
Quando deixa os campos Nome, Sobrenome e Email em branco
E clica no botão "Enviar"
Então deve exibir a mensagem "Valide os campos obrigatórios!"
```

#### ✅ **Cenário 4: Exibir erro ao informar email inválido**
```gherkin
Dado que o usuário acessa o formulário de contato
Quando preenche o campo email com um formato inválido: "email_invalido"
E clica no botão "Enviar"
Então deve exibir a mensagem de erro "Valide os campos obrigatórios!"
```

#### ✅ **Cenário 5: Enviar mensagem com sucesso sem telefone**
```gherkin
Dado que o usuário acessa o formulário de contato
Quando preenche todos os campos obrigatórios EXCETO o telefone
E clica no botão "Enviar"
Então deve exibir a mensagem "Mensagem enviada com sucesso."
```

---