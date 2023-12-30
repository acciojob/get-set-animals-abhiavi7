// Test for Cat
it("Cat species", () => {
  cy.visit(baseUrl + "/main.html");
  cy.window().then((win) => {
    const Cat = win.window.Cat; // Assuming Cat is defined in the window object
    cy.stub(win.console, "log").as("consoleLog");

    const species = "Siamese";
    const myCat = new Cat(species);
    myCat.makeSound();

    cy.get("@consoleLog").should("be.calledWith", `The ${species} makes a sound`);
    myCat.purr();
    cy.get("@consoleLog").should("be.calledWith", `purr`);
  });
});

// Test for Dog
it("Dog species", () => {
  cy.visit(baseUrl + "/main.html");
  cy.window().then((win) => {
    const Dog = win.window.Dog; // Assuming Dog is defined in the window object
    cy.stub(win.console, "log").as("consoleLog");

    const species = "Golden Retriever";
    const myDog = new Dog(species);
    myDog.makeSound();

    cy.get("@consoleLog").should("be.calledWith", `The ${species} makes a sound`);
    myDog.bark();
    cy.get("@consoleLog").should("be.calledWith", `woof`);
  });
});

