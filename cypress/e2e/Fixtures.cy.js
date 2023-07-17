describe('Fixtures in Cypress Automation',() => {
    let data
    before(() => {
        cy.visit('/login')
        cy.fixture('login').then((value) => {
            data = value
        })
    })

    it('Login Test using fixtures',function(){
        cy.get('#input-email').type(data.email)
        cy.get('#input-password').type(data.password)
        cy.get('input[value="Login"]').click()
    })
})