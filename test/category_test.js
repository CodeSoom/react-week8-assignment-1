Feature('Category');

const categories = ['한식', '중식', '일식', '양식', '분식'];

Scenario('카테고리 목록을 볼 수 있습니다.', (I) => {
  I.amOnPage('/restaurants');

  categories.forEach((category) => I.see(category));
});
