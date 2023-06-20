import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  context('with reviews', () => {
    it('renders names and descriptions', () => {
      const reviews = [
        {
          id: 1, name: '테스터', description: '맛있어요', score: 1,
        },
        {
          id: 2, name: '지나가는 사람', description: '맛없어요', score: 5,
        },
      ];

      const { container } = render((
        <Reviews reviews={reviews} />
      ));

      reviews.forEach((review) => {
        expect(container).toHaveTextContent(review.name);
        expect(container).toHaveTextContent(review.description);
      });
    });
  });

  context('when reviews is empty or undefined', () => {
    it('renders nothing', () => {
      [[], undefined].forEach((reviews) => {
        const { container } = render((
          <Reviews reviews={reviews} />
        ));

        expect(container.innerHTML).toBe('');
      });
    });
  });

  context('범위 내의 평점일경우', () => {
    it('평점에 맞게 별 개수가 랜더링된다', () => {
      const reviews = [
        {
          id: 1, name: '테스터', description: '맛있어요', score: 1,
        },
        {
          id: 2, name: '지나가는 사람', description: '맛없어요', score: 5,
        },
      ];

      const { queryByText } = render((
        <Reviews reviews={reviews} />
      ));

      reviews.forEach((review) => {
        expect(queryByText('⭐️'.repeat(review.score))).not.toBeNull();
      });
    });
  });

  context('범위를 벗어났을 경우', () => {
    it('설정한 개수에 맞게 별이 랜더링된다.', () => {
      const reviews = [
        {
          id: 1, name: '테스터', description: '맛있어요', score: -1,
        },
        {
          id: 2, name: '지나가는 사람', description: '맛없어요', score: 100,
        },
      ];

      const { queryByText } = render((
        <Reviews reviews={reviews} />
      ));

      expect(queryByText('⭐️')).not.toBeNull();
      expect(queryByText('⭐️'.repeat(5))).not.toBeNull();
    });
  });
});
