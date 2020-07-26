
Feature('LoginPage');

Scenario('로그인과 로그아웃', (I) => {
  I.amOnPage('/login');

  I.fillField('email', 'tester@example.com');
  I.fillField('password', 'test');

  I.click('Log In');

  I.amOnPage('/restaurants');

  I.see('Restaurants');
});

Scenario('로그아웃', (I) => {
  I.amOnPage('/logout');

  I.amOnPage('/login');

  I.see('Log In', 'a');
});
