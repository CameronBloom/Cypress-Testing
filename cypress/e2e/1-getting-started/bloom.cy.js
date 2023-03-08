describe('First Group of Tests', function () {

  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000');
  })  

  it('Get Elements', function() {
      // get form elements
      cy.get('body')
      cy.get('form')
      cy.get('#firstName').type("Billy").should('have.value', 'Billy')
      cy.get('#lastName').type("Barlowe").should('have.value', 'Barlowe')
      cy.get('#email').type("email@email.com")
      cy.get('#password').type("qwerty12345")
      cy.get('#terms')
      cy.get('[type="checkbox"]').check() 
      cy.get('button')
      cy.get("#firstName").should('be.empty')
      cy.get('form').submit()
      // cy.pause()
      cy.get('input').should('have.value', '')

  })

  // it('Dummy Test', function() {
  //   expect(true).to.equal(true);
  // })
})

// describe('Second Group of Tests', function () {
  
//   //Arrange
//   it('Visit a New Site', function() {
//     // Act
//     cy.visit("https://www.google.com");
//     cy.visit('http://localhost:3000');
//   })
// })