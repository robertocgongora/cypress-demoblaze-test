describe('Login Page', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('a#login2').click();
    cy.wait(2000);
    cy.get('input#loginusername').type('rcgongora');
    cy.wait(2000);
    cy.get('input#loginpassword').type('171183');
    cy.contains('button.btn-primary', 'Log in').click();
  });
  it('verify we can login using valid credentials', () => {
    cy.visit('/cart.html')  
  });
  it('verify we can login using valid credentials2', () => {
    cy.visit('/cart.html')  
  });
});