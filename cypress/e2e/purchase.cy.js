import { faker } from "@faker-js/faker";

describe("Compra - fluxo feliz", () => {
  it("deve adicionar produto ao carrinho e finalizar o checkout", () => {
    const customer = {
      name: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      address: faker.location.streetAddress(),
      card: "4111111111111111", // fake
    };

    cy.visit("/shop.html");

    // adiciona 1 produto específico
    cy.get('[data-cy="addToCart-sku-hoodie"]').click();

    // vai pro carrinho
    cy.get('[data-cy="goCart"]').click();
    cy.get('[data-cy="cartTable"]').should("be.visible");
    cy.get('[data-cy="cartItem-sku-hoodie"]').should("exist");
    cy.get('[data-cy="cartTotal"]').should("contain", "Total");

    // checkout
    cy.get('[data-cy="goCheckout"]').click();

    cy.get('[data-cy="customerName"]').type(customer.name);
    cy.get('[data-cy="customerEmail"]').type(customer.email);
    cy.get('[data-cy="customerAddress"]').type(customer.address);
    cy.get('[data-cy="cardNumber"]').type(customer.card);

    cy.get('[data-cy="placeOrder"]').click();

    // sucesso
    cy.url().should("include", "/success.html");
    cy.get('[data-cy="orderMessage"]').should("contain", "Obrigado");
    cy.get('[data-cy="orderId"]').should("contain", "ORD-");

    // valida localStorage do pedido
    cy.window().then((win) => {
      const raw = win.localStorage.getItem("fake_last_order");
      const order = JSON.parse(raw);
      expect(order.email).to.eq(customer.email);
      expect(order.items[0].id).to.eq("sku-hoodie");
    });
  });
});
