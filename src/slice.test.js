import reducer, {
  setRestaurant,
  changeLoginField,
  setAccessToken,
  logout,
  changeReviewField,
  clearReviewFields,
  setReviews,
} from './slice';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      restaurant: null,
      loginFields: {
        email: '',
        password: '',
      },
      accessToken: '',
      reviewFields: {
        score: '',
        description: '',
      },
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setRestaurant', () => {
    it('changes restaurant', () => {
      const initialState = {
        restaurant: null,
      };

      const restaurant = { id: 1, name: '마법사주방' };

      const state = reducer(initialState, setRestaurant({ restaurant }));

      expect(state.restaurant.id).toBe(1);
      expect(state.restaurant.name).toBe('마법사주방');
    });
  });

  describe('changeLoginField', () => {
    context('when email is changed', () => {
      it('changes only email field', () => {
        const initialState = {
          loginFields: {
            email: 'email',
            password: 'password',
          },
        };

        const state = reducer(
          initialState,
          changeLoginField({ name: 'email', value: 'test' }),
        );

        expect(state.loginFields.email).toBe('test');
        expect(state.loginFields.password).toBe('password');
      });
    });

    context('when password is changed', () => {
      it('changes only password field', () => {
        const initialState = {
          loginFields: {
            email: 'email',
            password: 'password',
          },
        };

        const state = reducer(
          initialState,
          changeLoginField({ name: 'password', value: 'test' }),
        );

        expect(state.loginFields.email).toBe('email');
        expect(state.loginFields.password).toBe('test');
      });
    });
  });

  describe('setAccessToken', () => {
    it('changes access token', () => {
      const initialState = {
        accessToken: '',
      };

      const state = reducer(initialState, setAccessToken({ accessToken: 'TOKEN' }));

      expect(state.accessToken).toBe('TOKEN');
    });
  });

  describe('logout', () => {
    it('clears access token', () => {
      const initialState = {
        accessToken: 'ACCESS_TOKEN',
      };

      const state = reducer(initialState, logout());

      expect(state.accessToken).toBe('');
    });
  });

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

      const state = reducer(initialState, setReviews({ reviews }));

      expect(state.restaurant.reviews).toHaveLength(reviews.length);
      expect(state.restaurant.reviews[0]).toEqual(reviews[0]);
    });
  });
});
