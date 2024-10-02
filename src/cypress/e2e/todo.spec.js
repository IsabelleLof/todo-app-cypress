// test it from the user perspective - user story
// 1. Can the user add a todo, test the input and if the button works

// 2. The user can not add when the input is empty

describe("To-Do App", () => {
  beforeEach(() => {
    // Besök din To-Do-apps URL
    cy.visit("http://localhost:3004"); // Justera URL om nödvändigt
  });

  it("should add a new todo when input is provided and button is clicked", () => {
    // Skriv in en ny To-Do
    cy.get('[data-testid="todo-input"]').type("Gör läxan");

    // Klicka på knappen för att lägga till To-Do
    cy.get('[data-testid="add-button"]').click();

    // Kontrollera att To-Do:n har lagts till i listan
    cy.contains("Gör läxan").should("be.visible");
  });

  it("should not add a todo when input is empty", () => {
    // Klicka på knappen utan att skriva något
    cy.get('[data-testid="add-button"]').click();

    // Kontrollera att ingen To-Do har lagts till
    cy.get("ul").children().should("have.length", 0);
  });
});
