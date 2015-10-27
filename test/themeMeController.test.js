describe('User can sign up', function() {
  var testHash = { 'email': 'test@test.com',
                   'password': 'test',
                   'passwordConf': 'test',
                   'url': 'www.soundcloud.com/awesomesong'
                 };
 beforeEach(function(){
   browser.get('http://localhost:8080/www/index.html');
 });

  it('I can sign up as a new user and specifiy a theme song', function() {
    email.sendKeys('test@test.com');
    password.sendKeys('test');
    passwordConf.sendKeys('test');
    url.sendKeys('www.soundcloud.com/awesomesong');
    signUp.click();
    console.log(userHash);
});
