describe('App', () => {
  beforeEach(() => {
    cy.intercept({url: 'https://stay-or-go-server.herokuapp.com/api/v1/disasters*'}, {fixture: 'disasters'})
  })
  it('should have a title', () => {
    cy.visit('http://localhost:3000/').wait(2000)
    cy.contains('Stay or Go')
  })
  it('should have a map displayed on page', () => {
    cy.get('.map-container').should('contain', 'map')
  })
  it('should have a navigation bar present on dashboard', () => {
    cy.get('nav').should('be.visible')
  })
  it('should have an input field for phone number', () => {
    cy.get('.phone-input').should('be.visible')
      .get('.submit-btn').should('be.visible')
  })
  it('should be able to display disaster alert messages', () => {
    cy.get('.disaster-title').should('contain', "Disaster Alerts")
  })
  it("should display disaster alerts for user's area", () => {
    cy.get('.alert-type').first().should('have.class', 'alert-type').contains('Red Flag Warning')
      .get('.severity-headline').first().should('have.class', 'severity-headline').contains('Your house will burn down in 2.5 seconds if a spark happens to ignite something')
      .get('.alert-info').first().should('have.class', 'alert-info').contains("Run for your life, your house is about to explode and melt simoultaneously. No need to save your cats, they don't have souls anyways.")      
      .get('.alert-type').last().should('have.class', 'alert-type').contains('Tornado')
      .get('.severity-headline').last().should('have.class', 'severity-headline').contains('A big ol tornado is a headin yur way')
      .get('.alert-info').last().should('have.class', 'alert-info').contains('Get in ur pickup and haul ass outta ther')
  })
    it('should give an error message if user is submitting without inputing complete phone number', () => {
      cy.get('input[type="tel"]').type('123456')
      .get('.submit-btn').click()
      .get('.sms-form')
      .find('h2').should('have.class', 'error').contains('Error')
    })
    it('should be able to enter phone number to input field', () => {
      cy.get('input[type="tel"]').type('8177187210').should('have.value', '+1 (817) 718-7210')
    })
    it('should let user know if phone number was successfully submitted', () => {
    cy.get('input[type="tel"]').type('8177187210').should('have.value', '+1 (817) 718-7210')
      .get('.submit-btn').click().wait(2000)
      .get('.sms-form')
      .find('h2').contains('Success!')
  })
  // it('should display a message if there are no current disasters', () => {
  //   cy.get('.weather-alert').should('contain.text', "No disaster alerts for your area at this time!")
  // })
})