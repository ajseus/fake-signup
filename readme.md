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
🔄 Geração de Dados Dinâmicos
A cada execução:

Nome

Sobrenome

E-mail único

Senha segura

Data de nascimento

Telefone

Tudo é gerado automaticamente usando faker, garantindo:

Testes independentes

Zero conflito de dados

Execuções repetíveis

▶️ Como executar o projeto
1️⃣ Instalar dependências
bash
Copiar código
npm install
2️⃣ Subir a aplicação fake
bash
Copiar código
npm run serve
3️⃣ Executar os testes
Headless
bash
Copiar código
npm run cy:run
Interface gráfica
bash
Copiar código
npm run cy:open
Tudo automático (server + testes)
bash
Copiar código
npm run test:e2e
✅ Boas práticas aplicadas
Uso de data-cy para seletores

Separação de responsabilidades

Custom Commands

Factory de dados

Testes positivos e negativos

Código legível e organizado

📌 Próximos passos (evoluções possíveis)
Mock de API com cy.intercept()

Page Objects

Relatórios com Mochawesome

Pipeline CI (GitHub Actions)

Testes de acessibilidade

👩‍💻 Sobre
Projeto desenvolvido para fins de portfólio em Qualidade de Software e Automação de Testes.

💡 Foco em qualidade como processo, não apenas execução de testes.

⭐ Se esse projeto te ajudou ou chamou atenção, fique à vontade para deixar uma estrela!
