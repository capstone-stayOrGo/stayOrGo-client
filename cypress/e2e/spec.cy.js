describe('App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://stay-or-go-server.herokuapp.com/api/v1', {fixture: 'mockData'})
    cy.visit('http://localhost:3002/').wait(2000)
  })
  it('should have a title', () => {
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
  })
  it('should be able to enter phone number to input field', () => {
    cy.get('input[type="tel"]').first().type('8177187210').should('have.value', '+1 (817) 718-7210')
  })
  it('should let user know if phone number was successfully submitted', () => {
    cy.get('input[type="tel"]').first().type('8177187210').should('have.value', '+1 (817) 718-7210')
      .type('userMessage').should('have.value', 'Success! You will receive disaster alerts`')
  })
  // it('should give an error message if user is submitting without inputing phone number', () => {
  //   cy.get('input[type="tel"]').first().type('')
  //     .get('.submit-btn').click()
  //     .get('.sms-notify').contains('Please enter a valid phone number')
  // })
  it('should be able to display disaster alert messages', () => {
    cy.get('.disaster-title').should('contain', "Disaster Alerts")
  })
  it("should display disaster alerts for user's area", () => {
    cy.get('.alert-details').first().should('have.class', 'alert-details').contains('Red Flag Warning')
      .get('.alert-details').first().should('have.class', 'alert-details').contains('Your house will burn down in 2.5 seconds if a spark happens to ignite something')
      .get('.alert-details').first().should('have.class', 'alert-details').contains("Run for your life, your house is about to explode and melt simoultaneously. No need to save your cats, they don't have souls anyways.")      
      .get('.alert-details').last().should('have.class', 'alert-details').contains('Tornado')
      .get('.alert-details').last().should('have.class', 'alert-details').contains('A big ol tornado is a headin yur way')
      .get('.alert-details').last().should('have.class', 'alert-details').contains('Get in ur pickup and haul ass outta ther')
  })
  it('should display a message if there are no current disasters', () => {
    cy.intercept('GET', 'https://stay-or-go-server.herokuapp.com/api/v1/disasters?lat=39.7392&long=-104.9903', )
    cy.visit('http://localhost:3002/').wait(2000)
      .get('.weather-alert').should('contain.text', "No disaster alerts for your area at this time!")
  })
})