describe('Orange HRM Test',() =>{
    beforeEach(() =>{
        cy.visit('https://seleniumpractise.blogspot.com/2021/08')
    })

    it('Click on Know More for a specific record',function(){
        cy.get('table[id="customers"] ')
        .find('td')
        .filter(":contains('Ola')")
        .parent()
        .contains('Know More')
        .click()
    })
})