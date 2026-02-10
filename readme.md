# 🚀 Fake Signup – Cypress E2E Portfolio

Projeto criado para **demonstração de automação de testes End-to-End com Cypress**, focado em boas práticas de QA, organização de código e geração dinâmica de dados.

Este repositório faz parte do meu **portfólio profissional em Qualidade de Software**.

---

## 🎯 Objetivo do Projeto

Simular um fluxo real de **cadastro de usuário**, utilizando:
- Página HTML fake (controlada)
- Geração automática de dados
- Testes E2E confiáveis e reproduzíveis
- Seletores estáveis (`data-cy`)

Ideal para demonstrar:
- Automação de testes com Cypress
- Pensamento de qualidade desde o início
- Organização de projeto e boas práticas

---

## 🧪 O que é testado?

✔️ Cadastro com dados válidos  
✔️ Validação de campos obrigatórios  
✔️ Validação de e-mail inválido  
✔️ Persistência de dados (LocalStorage)  
✔️ Feedback visual de sucesso e erro  

---

## 🛠️ Tecnologias e Ferramentas

- **Cypress** – Testes End-to-End
- **JavaScript**
- **@faker-js/faker** – Geração dinâmica de dados
- **HTML / CSS / JS** – Página fake de cadastro
- **Node.js**

---

## 📁 Estrutura do Projeto

```bash
fake-signup/
│
├── app/
│   └── index.html              # Página fake de cadastro
│
├── cypress/
│   ├── e2e/
│   │   └── signup.cy.js        # Testes E2E
│   │
│   └── support/
│       ├── commands.js         # Custom commands
│       ├── dataFactory.js      # Geração de dados (faker)
│       └── e2e.js              # Configurações globais
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