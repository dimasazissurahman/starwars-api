/// <reference types="Cypress" />

const clickHeader = () => {
    cy.get('.header-button').click()
}

describe('Testing Home Page', function () {
    it('Test Responsive Web App', function () {
        cy.visit('http://localhost:3000/')
        cy.viewport('iphone-4');
        cy.viewport('iphone-xr');
        cy.viewport('ipad-mini');
        cy.viewport('macbook-15');
    });
    it('Test Input Text Search', function () {                      
        cy.get('.input-search').type('Darth Vader ').should('have.value', 'Darth Vader ')                
        cy.get('.cursor-pointer').eq(0).click({ force: true }).then(() => clickHeader())
    })
    it('Test Click Drop Down', function () {                
        cy.wait(5000).then(() => {
            cy.get('.row').eq(1).click().then(() => {
                cy.get('#dropdown-people').click({ force: true }).then(() => {
                    cy.wait(8000)
                    cy.get('p').contains('Films').next().click().then(() => clickHeader())                                    
                })
            })
            cy.get('.row').eq(2).click().then(() => {
                cy.get('#dropdown-planet').click({ force: true }).then(() => clickHeader())
            })
            cy.get('.row').eq(3).click().then(() => {
                cy.get('#dropdown-films').click({ force: true }).then(() => clickHeader())
            })
        })
    })
    it('Test List Page', function () {
        cy.wait(5000)
        cy.get('.text-more').eq(0).click().then(() => clickHeader())
        cy.get('#logo-button-love').eq(0).click().should('have.id', 'logo-button-love')
    })
    it('Test Button People and Planet', function () {
        cy.get('.wrap-flex-button').then(() => {
            for(let i=0;i<2;i++){
                cy.get('.button-all-list').click();
            }            
        })
    })
    it('Test Infinite List', function () {
        cy.wait(5000)
        cy.scrollTo('bottom').then(() => {
            cy.scrollTo('bottom')
        });
    })

})