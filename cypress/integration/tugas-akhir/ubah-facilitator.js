// Login
// Facilitator
// Tambah facilitator
// Lihat facilitator
// Ubah facilitator
// Non-aktifkan facilitator
// username: e@dojobox.id
// password: admin

describe('Ubah Facilitator', function(){
        //Ubah Facilitator ()
        it('TC-Ubah Facilitator', function(){
            const filepath = 'images/kapal.jpg';

            cy.loginPKH();
            cy.get(':nth-child(3) > .dt-center > .btn-group > .btn > .fas').click({force: true}).should('have.class', 'fas fa-ellipsis-v');
            cy.get('[href="facilitator/edit/457"]').should('be.visible').click();
            cy.get('#user_fullname').clear().type("Abi").should('have.value','Abi');
            cy.get('#user_email').clear().type("abi@mail.com").should('have.value','abi@mail.com');
    
    
            cy.get('#user_is_active').children().should('exist'); //Random status user
            // cy.get('#img-drag.user_image').attachFile('download.jpg').should('exist');
            cy.get('input[type="file"]').attachFile(filepath).should('exist');
            cy.get('#user_password').clear().type("admin").should('have.value','admin');
            cy.get('#user_province_id').select('BALI').should('contain', 'BALI');
            cy.get('#user_city_id').select('KAB. BADUNG').should('contain', 'KAB. BADUNG');
            cy.get('#user_subdistrict_id').select('Kuta').should('contain', 'Kuta');
            cy.get('#user_address').clear().type('Dsn. Jeketro').should('have.value','Dsn. Jeketro');
            // cy.get('#user_area_is_domicile').uncheck();
            // cy.get('.custom-control')
            // cy.get('#user_area_is_domicile').click({force: true}).should('exist');
            // cy.get('.custom-switch .custom-control-label::before').check('').should('exist');
            cy.get('#user_area_is_domicile').parent('.custom-switch').click({ position: 'left' }).should('exist');
            // cy.get('#user_area_is_domicile').should('be.checked');
            cy.get('#user_area_province_id').select('BANTEN').should('contain', 'BANTEN');
            cy.get('#user_area_city_id').select('KOTA SERANG').should('contain', 'KOTA SERANG');
            cy.get('#user_area_subdistrict_id').select('Curug').should('contain', 'Curug');
            cy.get('#edit').should('be.visible').click();
            cy.get('#generalModal > .modal-dialog > .modal-content > .modal-footer > .btn').click({force: true}).contains('OK').should('be.visible').click();
    
        })  
    })