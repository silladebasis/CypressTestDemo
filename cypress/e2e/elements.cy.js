describe('Cypress Examples',() => {
    it('DOM commands',() => {
        cy.visit('https://naveenautomationlabs.com/opencart/index.php')
        //cy.get('.image').last().click()
        //cy.contains('Apple Cinema 30').click()

        //cy.get('div').find('a img[alt="iPhone"]').click()

        //cy.get('div').find('a>').filter('img[alt="iPhone"]').click()

        cy.get('div.caption h4 a').then(($ele) => {
            cy.log($ele.text())
        })

    })
})