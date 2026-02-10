import { buildSignupData } from "./dataFactory";

Cypress.Commands.add("generateSignupData", () => {
  const data = buildSignupData();
  Cypress.env("signupData", data);
  return cy.wrap(data, { log: false });
});
