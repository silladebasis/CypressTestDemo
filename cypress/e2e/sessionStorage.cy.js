describe('Session Storage Login Test',() => {
    const login = () => {
        cy.session('login',() => {
            cy.visit('http://eaapp.somee.com/')
            cy.get('a[href*="Login"]').click()
            cy.fixture('loginEA').then((login) => {
                cy.get('#UserName').type(login.UserName)
                cy.get('#Password').type(login.Password)
            })
            cy.contains('Log in').click()
        })
    }
    beforeEach(() => {
        login()
        cy.visit('http://eaapp.somee.com/')
        
    })
    it('Navigate to Employee Details',function(){
        cy.contains('Employee Details').click()
    })

    it('Navigate to Manage Users',function(){
        cy.contains('Manage Users').click()
    })
})