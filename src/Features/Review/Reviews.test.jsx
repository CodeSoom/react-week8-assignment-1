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

  it('평점에 따라 별의 개수가 랜더링된다', () => {
    const reviews = [
      {
        id: 1, name: '박웅앵', description: '맛있어요', score: -1,
      },
      {
        id: 2, name: '김웅앵', description: '우욱', score: 100,
      },
    ];

    const { queryByText } = render((
      <Reviews reviews={reviews} />
    ));

    expect(queryByText('⭐️')).not.toBeNull();
    expect(queryByText('⭐️'.repeat(5))).not.toBeNull();
  });
});
