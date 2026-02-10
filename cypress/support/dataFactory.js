import { faker } from "@faker-js/faker";

export function buildSignupData() {
  const ts = Date.now();

  const firstName = faker.person.firstName();
  const lastName  = faker.person.lastName();

  const email =
    `${firstName}.${lastName}.${ts}`
      .toLowerCase()
      .replace(/[^a-z0-9.]/g, "") + "@examplemail.test";

  const password = faker.internet.password({
    length: 14,
    memorable: false,
    pattern: /[A-Za-z0-9!@#$%&*]/
  });

  const birthDay = faker.number.int({ min: 1, max: 28 });
  const birthMonth = faker.number.int({ min: 1, max: 12 });
  const birthYear = faker.number.int({ min: 1985, max: 2005 });

  const phone = faker.phone.number("119########");

  return { firstName, lastName, email, password, birthDay, birthMonth, birthYear, phone };
}
