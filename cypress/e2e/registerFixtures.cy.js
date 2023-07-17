describe('Registration Flow using fixtures data',() => {
    let data
    before(() => {
        cy.visit('/register')
        cy.fixture('register').then((value)=>{
            data = value
        })
    })

    it('Enter the form details',function(){
        cy.get('#input-firstname').type(data.name.firstName)
        cy.get('#input-lastname').type(data.name.lastName)
        cy.get('#input-email').type(data.email)
        cy.get('#input-telephone').type(data.telephone)
        cy.get('#input-password').type(data.login.password)
        cy.get('#input-confirm').type(data.login.confirmPassword)
        cy.get('#input-agree').click({force: true})
        cy.screenshot('register',{capture:'fullPage'})
        //cy.get('input.btn.btn-primary').click()
        //cy.get('div#content h1').should('have.text',' Your Account Has Been Created!')
    })
})