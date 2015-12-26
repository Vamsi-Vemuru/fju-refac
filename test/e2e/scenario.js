describe('fjuApp', function() {
  describe('Phone list view', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    }); 
    it('check that on click without keys we get required', function() {
      element(by.id('reg')).click();
      expect(element.all(by.id('req')).count()).toEqual(5);

      element(by.model('user.firstName')).sendKeys('Vamsi');
      expect(element.all(by.id('req')).count()).toEqual(4);

      element(by.model('user.emailId')).sendKeys('vamsi0493@gmail.com');
      expect(element(by.id('inveid')).isPresent()).toBe(false);
      element(by.model('user.phoneNo')).clear();
      element(by.model('user.emailId')).sendKeys('vamsi0493@.com');
      expect(element(by.id('inveid')).isPresent()).toBe(true);
      element(by.model('user.phoneNo')).clear();
      element(by.model('user.emailId')).sendKeys('vamsi0493@fsdfsa.fsdaf');
      expect(element(by.id('inveid')).isPresent()).toBe(true);

      element(by.model('user.phoneNo')).sendKeys('123');
      expect(element(by.id('phid')).isPresent()).toBe(true);
      element(by.model('user.phoneNo')).clear();
      element(by.model('user.phoneNo')).sendKeys('9440154003');
      expect(element(by.id('phid')).isPresent()).toBe(false);
      element(by.model('user.phoneNo')).clear();
      element(by.model('user.phoneNo')).sendKeys('94401540031231');
      expect(element(by.id('phid')).isPresent()).toBe(true);
    });
  });
});