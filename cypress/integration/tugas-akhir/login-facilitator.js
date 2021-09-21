// Login
// Facilitator
// Tambah facilitator
// Lihat facilitator
// Ubah facilitator
// Non-aktifkan facilitator
// username: e@dojobox.id
// password: admin


describe('Tes-Login', function(){
    beforeEach('', function(){
        cy.visit('https://admin.pkh.dojobox.id/').should('exist');
    })

    //Test Case Login Email Kosong dan password kosong
    it('TC-Login-1', function(){
        cy.get('#input-email').should('be.empty');
        cy.get('#input-password').should('be.empty');
        cy.get('#btn-login').should('be.visible').click();

    }),

    //Test Case Login Email terisi dan password kosong
    it('TC-Login-2', function(){
        cy.get('#input-email').type('e@dojobox.id').should('have.value','e@dojobox.id');
        cy.get('#input-password').should('be.empty');
        cy.get('#btn-login').should('be.visible').click();
    }),

    //Test Case Login Email kosong dan password terisi
    it('TC-Login-3', function(){
        cy.get('#input-email').should('be.empty');
        cy.get('#input-password').type('admin').should('have.value','admin');
        cy.get('#btn-login').should('be.visible').click();

    }),

    //Test Case Login Email salah dan password salah
    it('TC-Login-4', function(){
        cy.get('#input-email').type('ed@dojobox.id').should('have.value','ed@dojobox.id');
        cy.get('#input-password').type('admina').should('have.value','admina');
        cy.get('#btn-login').should('be.visible').click();

    }),

    //Test Case Login Email terisi dan password terisi
    it('TC-Login-5', function(){
        cy.get('#input-email').type('e@dojobox.id').should('have.value','e@dojobox.id');
        cy.get('#input-password').type('admin').should('have.value','admin');
        cy.get('#btn-login').click().should('be.visible').click();

    })      
})