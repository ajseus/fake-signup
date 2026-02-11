# 🚀 Fake Shop E2E – Cypress Automation Portfolio

Projeto desenvolvido para demonstrar automação de testes End-to-End com Cypress, simulando fluxos reais de usuário:

- ✅ Cadastro de usuário  
- 🛒 Seleção de produto  
- 🧺 Carrinho  
- 💳 Checkout  
- 🎉 Confirmação de pedido  

Este repositório faz parte do meu portfólio profissional em **Qualidade de Software e Automação de Testes**, com foco em estrutura, estratégia e boas práticas.

---

## 🎯 Objetivo do Projeto

Simular fluxos reais de aplicação web para demonstrar:

- Estratégia de testes E2E
- Organização e escalabilidade
- Geração dinâmica de dados
- Uso de seletores estáveis (`data-cy`)
- Validação de persistência de estado (LocalStorage)

Mais do que automatizar, o objetivo é evidenciar qualidade como processo.

---

## 🧪 Fluxos Automatizados

### 🔹 Cadastro
- Preenchimento de formulário
- Validação de campos obrigatórios
- Validação de e-mail
- Feedback visual de sucesso e erro
- Persistência de dados no LocalStorage

### 🔹 Fluxo de Compra
- Seleção de produto
- Adição ao carrinho
- Validação de subtotal e total
- Preenchimento do checkout
- Confirmação de pedido
- Validação do pedido salvo no LocalStorage

---

## 🛠️ Tecnologias e Ferramentas

- **Cypress** – Automação End-to-End
- **JavaScript**
- **@faker-js/faker** – Geração dinâmica de dados
- **HTML / CSS / JS** – Aplicação fake controlada
- **Node.js**
- **http-server**
- **start-server-and-test**

---

## 📁 Estrutura do Projeto

```bash
fake-signup/
│
├── docs/                       # Aplicação fake (GitHub Pages)
│   ├── index.html              # Cadastro
│   ├── shop.html               # Listagem de produtos
│   ├── cart.html               # Carrinho
│   ├── checkout.html           # Checkout
│   └── success.html            # Confirmação de pedido
│
├── cypress/
│   ├── e2e/
│   │   ├── signup.cy.js
│   │   └── purchase.cy.js
│   │
│   └── support/
│       ├── commands.js
│       ├── dataFactory.js
│       └── e2e.js
│
├── cypress.config.js
├── package.json
└── README.md
