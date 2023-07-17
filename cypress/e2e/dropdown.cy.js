describe('Handle Dropdown test',() =>{
    it('dropdown test',function(){
        cy.visit('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
        //cy.get('#select-demo').select('Tuesday')
        cy.get('#select-demo').select(5)
        cy.get('#select-demo option:selected').should('have.text','Thursday')
    })

    it('Multi-Select Test in Cypress',function(){
        cy.visit('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
        cy.get('#multi-select').select(['California','Pennsylvania'])
    })

    it('Select dropdown value without select tag',function(){
        cy.visit('https://www.amazon.com')
        cy.get('#twotabsearchtextbox').type('iPhone')
        cy.get('.left-pane-results-container').find('div').contains('14 pro max').click()
    })
})