// Login
// Facilitator
// Tambah facilitator
// Lihat facilitator
// Ubah facilitator
// Non-aktifkan facilitator
// username: e@dojobox.id
// password: admin


describe('Tambah-Facilitator', function(){
    // Test Case tambah facilitator
    it('TC-Tambah-Facilitator', function(){
        cy.loginPKH();
        cy.get('.d-flex > .btn').should('be.visible').click();

        // Informasi Dasar
        // cy.get('.drop-zone').attachFile('download.jpg');
        cy.get('input[type="file"]').attachFile('download.jpg').should('exist');
        cy.get('#user_fullname').type('Ani').should('have.value','Ani');
        cy.get('#user_email').type('ani@mail.com').should('have.value','ani@mail.com');
        cy.get('#user_is_active').type('Aktif{enter}').should('have.value','1');
        cy.get('#user_password').type('admin123').should('have.value','admin123');
        cy.get('#user_province_id').select('BALI').should('have.value', '51');
        cy.get('#user_city_id').select('KAB. JEMBRANA').should('have.value', '5101');
        cy.get('#user_subdistrict_id').select('Negara').should('contain', 'Negara');
        cy.get('#user_address').type('Dusun Jeketro').should('have.value','Dusun Jeketro');

        // cy.get('.custom-control')
        cy.get('#user_area_province_id').select('BANTEN').should('contain', 'BANTEN');
        cy.get('#user_area_city_id').select('KOTA SERANG').should('contain', 'KOTA SERANG');
        cy.get('#user_area_subdistrict_id').select('Curug').should('contain', 'Curug');       
        cy.get('#add').should('be.visible').click();
    })



})