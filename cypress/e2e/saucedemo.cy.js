import { SauceDemo } from "../POM/saucedemoPOM"

describe('template spec', () => {

  before(() => {
    cy.log('I run before test!!!!!!')
  })

  it('Move entrepreneurs to Application', () => {
    cy.log('Request: GET')
    cy.request('POST','https://pepatest.free.beeceptor.com',{faker: 'Lisa.Jackson'})
  })
})