class saucedemoPOM{
 get = {
// Login
        username_input: ()=> cy.get('[id="id_username"]'),
        password_input: ()=> cy.get('[id="id_password"]'),
        login_button: ()=> cy.get('input[type="submit"]'),
// Menu
        entrepreneurApplication: ()=> cy.get('a').contains('Entrepreneur Applications (aka Member Applications)'),
        mentorApplication: ()=> cy.get('a').contains('Mentor Applications'),
// Entrepreneur application
         program_item: ()=> cy.get('[role="combobox"]').eq(0)
    }
//Login
 enter_username(enter){
    this.get.username_input().type(enter)
    }

 enter_password(enter){
    this.get.password_input().type(enter)
 }
 click_login(){
    this.get.login_button().click()
 }

// Menu
click_entrepreneurApp(){
   this.get.entrepreneurApplication().click()
}
click_mentorApp(){
   this.get.mentorApplication().click()
}
// Entrepreneur application
select_program(program){
   this.get.program_item().click()
}
}

export const SauceDemo = new saucedemoPOM();