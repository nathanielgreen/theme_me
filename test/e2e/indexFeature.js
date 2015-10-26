
describe("Homepage sign up", function() {

  const email = element(by.id('email'));
  const password = element(by.id('password'));
  const passwordConf = element(by.id('passwordConf'));
  const signUp = element(by.id('signUp'));

  describe("On startup", function(){
    beforeEach(function(){
      browser.get('http://localhost:8080/www/index.html');
    });

    it('has a title', function() {
      expect(browser.getTitle()).toEqual('Theme Me');
    });

    it('has an email field', function(){
      expect(email.isDisplayed()).toBeTrue;
    });

    it('has a password field', function(){
      expect(password.isDisplayed()).toBeTrue;
    });

    it('has a password confirmation field', function(){
      expect(passwordConf.isDisplayed()).toBeTrue;
    });

    it('has a sign up button', function(){
      expect(signUp.isDisplayed()).toBeTrue;
    });
  });
});
