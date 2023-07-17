describe('EA Application Login in Fixture',() => {
    beforeEach(() => {
        cy.visit('http://eaapp.somee.com/')
    })
    it('Login test using fixture',function(){
        //cy.contains('Login').click()
        cy.get('a[href*="Login"]').click()
        cy.fixture('loginEA').then((login) => {
            cy.get('#UserName').type(login.UserName)
            cy.get('#Password').type(login.Password)
        })
        cy.contains('Log in').click()
    })
})