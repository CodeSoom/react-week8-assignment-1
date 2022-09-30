Feature('Header');

const pages = [
  '/about',
  '/restaurants',
  '/login',
  '/not-exist',
];

Scenario('EatGo를 클릭하면 메인 페이지로 돌아옵니다.', ({ I }) => {
  pages.forEach((page) => {
    I.amOnPage(page);

    I.click('EatGo');

    I.see('EatGo');
  });
});

const menus = [
  { name: 'About', url: '/about' },
  { name: 'Restaurants', url: '/restaurants' },
  { name: 'Log in', url: '/login' },
];

Scenario('네비게이션을 볼 수 있다.', ({ I }) => {
  I.amOnPage('/');

  I.see('EatGo');

  menus.forEach(({ name }) => {
    I.see(name);
  });
});

Scenario('네비게이션의 메뉴를 클릭하면 메뉴페이지로 이동한다.', ({ I }) => {
  menus.forEach(({ name, url }) => {
    I.amOnPage('/');

    I.click(name);

    I.seeInCurrentUrl(url);
  });
});
