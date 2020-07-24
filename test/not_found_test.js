Feature('NotFound');

Scenario('존재하지 않는 url로 접근했을 때 "/"로 redirect된 페이지를 보여줍니다.', (I) => {
  I.amOnPage('/any_not_exist_url');

  I.see('Home');
});
