Feature('Home');

const menus = [
  { name: 'about', url: '/about' },
  { name: '자세히 보기', url: '/restaurants' },
];

Scenario('메뉴들을 볼 수 있다.', (I) => {
  I.amOnPage('/');

  I.see('Home');

  menus.forEach(({ name }) => {
    I.see(name);
  });
});

Scenario('메뉴를 클릭하면 메뉴페이지로 이동한다.', (I) => {
  menus.forEach(({ name, url }) => {
    I.amOnPage('/');

    I.click(name);

    I.seeInCurrentUrl(url);
  });
});
