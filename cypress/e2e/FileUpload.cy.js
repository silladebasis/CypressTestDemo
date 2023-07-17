describe("File Upload Testing", () => {
  beforeEach(() => {
    cy.visit("https://fineuploader.com/demos.html");
  });
  it("Upload File", function () {
    cy.url().should('include','demos.html')
    cy.get('.buttons input[name="qqfile"]').selectFile('cypress/fixtures/fileUploadImage.jpg',{force:true})
  });
});
