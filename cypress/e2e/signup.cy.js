describe("Fake Signup - E2E", () => {
  it("cadastra com dados novos a cada execução e valida sucesso", () => {
    cy.generateSignupData().then((u) => {
      cy.visit("/");

      cy.get('[data-cy="firstName"]').type(u.firstName);
      cy.get('[data-cy="lastName"]').type(u.lastName);
      cy.get('[data-cy="email"]').type(u.email);
      cy.get('[data-cy="password"]').type(u.password);

      cy.get('[data-cy="birthDay"]').select(String(u.birthDay));
      cy.get('[data-cy="birthMonth"]').select(String(u.birthMonth));
      cy.get('[data-cy="birthYear"]').select(String(u.birthYear));

      cy.get('[data-cy="phone"]').type(u.phone);

      cy.get('[data-cy="submit"]').click();

      cy.get('[data-cy="successBox"]')
        .should("be.visible")
        .and("contain", "Cadastro realizado com sucesso");

      // Valida que o “cadastro” foi persistido no localStorage
      cy.window().then((win) => {
        const raw = win.localStorage.getItem("fake_signup_last_user");
        expect(raw, "localStorage deve conter cadastro").to.be.a("string");

        const saved = JSON.parse(raw);
        expect(saved.email).to.eq(u.email);
        expect(saved.firstName).to.eq(u.firstName);
        expect(saved.lastName).to.eq(u.lastName);
      });

      cy.hash().should("eq", "#success");
    });
  });

  it("mostra erro quando email é inválido (teste negativo)", () => {
    cy.visit("/");

    cy.get('[data-cy="firstName"]').type("Teste");
    cy.get('[data-cy="lastName"]').type("Usuario");
    cy.get('[data-cy="email"]').type("email-invalido");
    cy.get('[data-cy="password"]').type("12345678");
    cy.get('[data-cy="birthDay"]').select("10");
    cy.get('[data-cy="birthMonth"]').select("10");
    cy.get('[data-cy="birthYear"]').select("1999");

    cy.get('[data-cy="submit"]').click();

    cy.get('[data-cy="errorBox"]')
      .should("be.visible")
      .and("contain", "E-mail inválido.");
  });
});
