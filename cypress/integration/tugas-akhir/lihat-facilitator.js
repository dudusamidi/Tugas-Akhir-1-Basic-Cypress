// Login
// Facilitator
// Tambah facilitator
// Lihat facilitator
// Ubah facilitator
// Non-aktifkan facilitator
// username: e@dojobox.id
// password: admin

describe('Lihat Facilitator', function(){
    //Lihat Facilitator (Oke Sudah Jalan)
    it('TC-Lihat Facilitator', function(){
        cy.loginPKH();
        cy.get(':nth-child(3) > .dt-center > .btn-group > .btn > .fas').click({force: true}).should('not.be.visible'); //.should('exist');
        cy.get('[href="facilitator/detail/457"]').click({force: true}).should('not.be.visible'); //.should('exist');
    })
})