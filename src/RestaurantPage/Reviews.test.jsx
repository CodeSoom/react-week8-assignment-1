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

  context('with normal range review score', () => {
    it('renders review socore', () => {
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

  context('without normal range review score', () => {
    it('renders changed review socore', () => {
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
