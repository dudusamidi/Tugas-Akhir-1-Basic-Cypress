// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import "cypress-file-upload"
 
// Cypress.Commands.add('linkURL', function(){
//     cy.visit('https://www.demoblaze.com/index.html')
// }),

//Login Automate Admin PKH
// Cypress.Commands.add('loginPKH', function(){
//     cy.visit('https://admin.pkh.dojobox.id/')
//     cy.get('#input-email').type('e@dojobox.id');
//     cy.get('#input-password').type('admin')
//     cy.get('#btn-login').click()
// })

Cypress.Commands.add('loginPKH', () => {
    cy.visit('https://admin.pkh.dojobox.id/').should('exist');
    cy.get('#input-email').type('e@dojobox.id').should('have.value','e@dojobox.id');
    cy.get('#input-password').type('admin').should('have.value','admin');
    cy.get('#btn-login').click({force: true}).should('be.visible');
})
