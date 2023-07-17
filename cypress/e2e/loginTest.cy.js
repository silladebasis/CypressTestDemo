describe('Orange HRM Test',() =>{
    before(() =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('Perform Login Test',function(){
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.contains('My Info').click()
        cy.get('[name="firstName"]').should('have.value','Paul')
    })
})