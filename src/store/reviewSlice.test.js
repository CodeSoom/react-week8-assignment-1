import reducer, {
  changeReviewField,
  clearReviewFields,
  setReviews,
} from './reviewSlice';

describe('reducer', () => {
  describe('changeReviewField', () => {
    it('changes a field of review', () => {
      const initialState = {
        reviewFields: {
          score: '',
          description: '',
        },
      };

      const state = reducer(
        initialState,
        changeReviewField({ name: 'score', value: '5' }),
      );

      expect(state.reviewFields.score).toBe('5');
    });
  });

  describe('clearReviewFields', () => {
    it('clears fields of review', () => {
      const initialState = {
        reviewFields: {
          score: 'SCORE',
          description: 'DESCRIPTION',
        },
      };

      const state = reducer(initialState, clearReviewFields());

      expect(state.reviewFields.score).toBe('');
      expect(state.reviewFields.description).toBe('');
    });
  });

  describe('setReviews', () => {
    it('changes reviews of the current restaurant', () => {
      const reviews = [
        {
          id: 1, name: '테스터', description: '맛있어요', score: 1,
        },
      ];

      const initialState = {
        restaurant: {
          reviews: [],
        },
      };

      const state = reducer(initialState, setReviews(reviews));

      expect(state.restaurant.reviews).toHaveLength(reviews.length);
      expect(state.restaurant.reviews[0]).toEqual(reviews[0]);
    });
  });
});
