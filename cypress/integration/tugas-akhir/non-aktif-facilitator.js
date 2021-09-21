// Login
// Facilitator
// Tambah facilitator
// Lihat facilitator
// Ubah facilitator
// Non-aktifkan facilitator
// username: e@dojobox.id
// password: admin

describe('Non Aktif Facilitator', function(){
    //Non Aktif Facilitator (oke)
    it('TC-Non Aktif Facilitator', function(){
        cy.loginPKH();
        cy.get(':nth-child(3) > .dt-center > .btn-group > .btn > .fas').click({force: true}).should('have.class', 'fas fa-ellipsis-v');
        cy.get(':nth-child(3) > .dt-center > .btn-group > .dropdown-menu > span.dropdown-item').should('be.visible').click({force: true});
        // cy.contains('OK').click()
        cy.get('#generalModal > .modal-dialog > .modal-content > .modal-footer > .btn').click({force: true}).contains('OK').should('be.visible').click({force: true});
        // cy.get('#generalModal > .modal-dialog > .modal-content > .modal-footer > .btn').click().should('exist');
        
        // cy.get(':nth-child(3) > .dt-center').click().should('exist');
        // cy.get('.container-fluid').click().should('exist');
        // cy.get(':nth-child(3) > .dt-center > .btn-group > .dropdown-menu > span.dropdown-item').click().should('exist');
        // cy.get('#generalModal > .modal-dialog > .modal-content > .modal-footer > .btn').click().should('exist');
    })
})